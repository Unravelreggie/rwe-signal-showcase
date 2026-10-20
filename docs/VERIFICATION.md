# Verification record

Checked on 2026-10-09T04:21:49.842Z.

- Independently recreated browser-only portfolio demonstration with fully fabricated examples.
- Node rule tests: passed (5 tests).
- TypeScript check and production build: passed.
- Dependency audit: zero reported vulnerabilities at the checked time.
- Fresh Chrome browser: core workflow, input guards, English/Chinese toggle and local actions passed.
- Layout checks: 1280 x 1000 desktop and 390 x 844 mobile; no document horizontal overflow.
- No runtime browser requests outside local preview origin.
- Screenshots inspected for each desktop and mobile view.
- Publication file allowlist reviewed. No raw data, reports, documents, databases, environment files or private Git history included.
- Local content scan found no credential/internal endpoint patterns; private-source comparison found no exact file matches or normalized ten-line code blocks of at least 400 characters.
- Independent read-only review completed; whitespace input blockers fixed and regression checked.

These are demonstration checks, not clinical, production or regulatory validation. Automated scans supplement content review and do not mathematically prove absence of every possible sensitive value.

## Product preview verification — 2026-10-20

- Existing Node rule tests and TypeScript/Vite production build pass.
- Screenshots were captured from this independent frontend using only its fabricated fixtures; no operational system or real data source was opened.
- Overview and alternate workflow-state screenshots are stored in `docs/previews/`. Both show the frontend-prototype / fictional-data banner.
- Browser checks covered PV unknown-agreement follow-up, RWE balanced/enriched method switching, and SDV guardian-identity manual review.
- The frontend has no account, backend connection, upload, telemetry or production write. Publication and live-host checks are tracked by the personal website release.
