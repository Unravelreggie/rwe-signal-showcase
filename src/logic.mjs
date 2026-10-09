const MAX_CELL = 1_000_000;
export function calculate(input) {
  const method = input?.method;
  if (method !== "ROR" && method !== "PRR") return invalid("Choose ROR or PRR.");
  const parsed = parseCells(input?.cells);
  if (!parsed.ok) return parsed;
  const { a, b, c, d } = parsed.cells;
  const target = a + b, comparison = c + d, event = a + c, other = b + d, n = target + comparison;
  if ([target, comparison, event, other, n].some((value) => value <= 0)) return invalid("All raw row and column margins must be greater than zero.");
  const raw = { a, b, c, d, target, comparison, event, other, n, expectedTargetEvent: (target * event) / n, chiSquare: (n * Math.pow(a * d - b * c, 2)) / (target * comparison * event * other) };
  const hasZero = [a, b, c, d].some((value) => value === 0);
  const corrected = Boolean(input?.applyCorrection) && hasZero;
  if (method === "ROR" && hasZero && !corrected) return invalid("ROR is not estimable with a zero cell unless the optional 0.5 correction is applied.", raw);
  if (method === "PRR" && c === 0 && !corrected) return invalid("PRR with c = 0 is unsupported unless the optional 0.5 correction is applied.", raw);
  const cells = corrected ? { a: a + 0.5, b: b + 0.5, c: c + 0.5, d: d + 0.5 } : { a, b, c, d };
  if (method === "ROR") {
    const estimate = (cells.a * cells.d) / (cells.b * cells.c);
    const se = Math.sqrt(1 / cells.a + 1 / cells.b + 1 / cells.c + 1 / cells.d);
    return { ok: true, method, corrected, raw, estimate, lower: Math.exp(Math.log(estimate) - 1.96 * se), upper: Math.exp(Math.log(estimate) + 1.96 * se) };
  }
  return { ok: true, method, corrected, raw, estimate: (cells.a / (cells.a + cells.b)) / (cells.c / (cells.c + cells.d)) };
}
function parseCells(cells) {
  if (!cells || typeof cells !== "object") return invalid("Enter all four cells.");
  const parsed = {};
  for (const key of ["a", "b", "c", "d"]) {
    const value = cells[key];
    if ((typeof value === "string" && value.trim() === "") || value === null || value === undefined) return invalid(`Cell ${key} is required.`);
    const numeric = typeof value === "string" ? Number(value.trim()) : value;
    if (!Number.isFinite(numeric) || !Number.isInteger(numeric) || numeric < 0 || numeric > MAX_CELL) return invalid(`Cell ${key} must be a nonnegative integer no greater than ${MAX_CELL}.`);
    parsed[key] = numeric;
  }
  return { ok: true, cells: parsed };
}
function invalid(error, raw) { return { ok: false, error, ...(raw ? { raw } : {}) }; }
