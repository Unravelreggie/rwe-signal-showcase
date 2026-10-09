# Public RWE signal-methodology showcase

This portfolio demonstration is a deliberately small, synthetic 2 x 2 reporting-table exercise. It has no connection to a reporting database, does not retrieve VAERS data, and contains no operational counts, study outputs, or case-level records. `SYN-PRODUCT-A` and `SYN-EVENT-X` are fictional names; every displayed number is entered or selected in the browser for illustration.

## What the demo calculates

The table contains target and comparison reports by event and other reports. The user can select one descriptive-disproportionality family at a time:

- **ROR**: `ad / (bc)`. With four positive cells, the Wald interval is `exp(log(ROR) +/- 1.96 * sqrt(1/a + 1/b + 1/c + 1/d))`.
- **PRR**: `[a/(a+b)] / [c/(c+d)]`.
- **Pearson chi-square**: `N(ad-bc)^2 / [(a+b)(c+d)(a+c)(b+d)]`. It is descriptive context for the displayed raw table, not a decision rule.
- **Raw expected target-event count**: `(a+b)(a+c)/N`.

Cells must be bounded nonnegative integers. Raw row and column margins must be positive. A zero cell makes uncorrected ROR non-estimable; PRR can be zero when `a = 0`, while `c = 0` is unsupported without correction. When a table has a zero cell, an optional Haldane-Anscombe-style `0.5` addition to all four cells can be selected for the chosen ROR or PRR estimate. It is disclosed in the result. The raw expected count and chi-square are never corrected.

## Interpretation boundary

Reporting disproportionality is not incidence, risk, causation, medical signal confirmation, or a production threshold screen. A high or low illustrative ratio can arise from reporting patterns, background selection, data quality, duplicate handling, case definition, confounding, or chance. It calls for context and review in a real pharmacovigilance workflow; this page cannot make a clinical or regulatory conclusion.

## Conceptual capability map

A real evidence workflow needs a declared source, version and time range; precisely defined target and comparison report sets; and a background from the same source. It must not pool backgrounds across sources. No capability or no matching report in a selected extract is not evidence of zero signals.

| Method or workflow | Public demo | Original private-project scope |
| --- | --- | --- |
| ROR / PRR | Editable synthetic raw-table examples | Source- and analysis-plan-specific implementation |
| Gamma-Poisson shrinkage | Described only as a simplified single-Gamma-Poisson concept | Not a validated full MGPS implementation in this demo |
| Stratification | Not implemented | Private-project analytic workflow only |
| Report-level logistic modelling | Not implemented | Private-project analytic workflow only |
| Signal assessment and reporting | Not implemented | Requires governed data, review, and domain judgment |

The page intentionally does **not** fabricate EBGM values, MGPS results, regression output, source findings, or a binary confirmed signal classification.

## Public references

- European Medicines Agency, [Good pharmacovigilance practices: Module IX Addendum I](https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-good-pharmacovigilance-practices-gvp-module-ix-signal-management-addendum-i-methods-signal-detection-adverse-reactions-medicinal-products_en.pdf).
- U.S. FDA, [VAERS data guide](https://vaers.hhs.gov/data.html).

These references describe pharmacovigilance context. They do not validate this public demonstration or replace a protocol, data-governance controls, clinical assessment, or regulatory review.
