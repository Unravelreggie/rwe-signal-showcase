import test from "node:test";
import assert from "node:assert/strict";
import { calculate } from "./logic.mjs";
const close = (actual, expected, tolerance = 1e-9) => assert.ok(Math.abs(actual - expected) < tolerance, `${actual} is not close to ${expected}`);
test("balanced table has ROR and PRR of 1 and chi-square of 0", () => {
  const cells = { a: 10, b: 90, c: 10, d: 90 }; const ror = calculate({ method: "ROR", cells }); const prr = calculate({ method: "PRR", cells });
  assert.equal(ror.ok, true); close(ror.estimate, 1); close(ror.raw.chiSquare, 0); assert.equal(prr.ok, true); close(prr.estimate, 1); close(prr.raw.chiSquare, 0);
});
test("enriched table matches hand-calculated values", () => {
  const cells = { a: 20, b: 80, c: 5, d: 95 }; const ror = calculate({ method: "ROR", cells }); const prr = calculate({ method: "PRR", cells });
  close(ror.estimate, 4.75); close(prr.estimate, 4); close(ror.raw.chiSquare, 10.285714285714286); close(ror.raw.expectedTargetEvent, 12.5);
});
test("zero cells require correction for ROR while raw PRR may be zero", () => {
  const cells = { a: 0, b: 100, c: 5, d: 95 }; const ror = calculate({ method: "ROR", cells }); const prr = calculate({ method: "PRR", cells }); const corrected = calculate({ method: "ROR", cells, applyCorrection: true });
  assert.equal(ror.ok, false); assert.equal(prr.ok, true); assert.equal(prr.estimate, 0); assert.equal(corrected.ok, true); assert.equal(corrected.corrected, true); close(corrected.raw.chiSquare, prr.raw.chiSquare);
});
test("all-zero raw margins remain invalid even when correction is requested", () => assert.equal(calculate({ method: "ROR", cells: { a: 0, b: 0, c: 0, d: 0 }, applyCorrection: true }).ok, false));
test("rejects invalid cells", () => { for (const value of [-1, 1.5, "", "   ", "\t", "not-a-number", 1_000_001]) assert.equal(calculate({ method: "PRR", cells: { a: value, b: 1, c: 1, d: 1 } }).ok, false); });
