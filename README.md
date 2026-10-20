# RWE · Signal methodology — synthetic public showcase

A toy report-level 2×2 table calculator demonstrating ROR and PRR using fabricated counts. It does not access VAERS or any other reporting database, estimate incidence, infer causation or perform medical signal confirmation.

This public repository contains **independently written demonstration code and entirely fabricated fixtures**. It is not a sanitized copy of a production system. No private Git history, company implementation, operational records, real study results, licensed terminology/templates, production screenshots, secrets or infrastructure configuration are included.

## Product preview

**Vaccine safety methods workspace** — Compare fabricated reporting tables and see descriptive estimates update immediately.

[**Open the interactive prototype →**](https://unravelreggie.github.io/demos/rwe-methods/)

[![Vaccine safety methods workspace: independently written frontend with fictional data](docs/previews/overview-en.jpg)](https://unravelreggie.github.io/demos/rwe-methods/)

Switch examples or methods to see how the output and its limits change. The prototype runs in the browser with invented fixtures and local state only.

<details>
<summary>See a second workflow state</summary>

![Vaccine safety methods workspace: alternate synthetic workflow state](docs/previews/workflow-en.jpg)

</details>

These are screenshots of this repository's independently written frontend, **not a company system**. Every record, count and output shown is fictional; no real data source or business situation is disclosed. No account or backend connection is required.

## Run locally

Requires Node.js 22.13 or later.

```sh
npm ci
npm test
npm run build
npm run dev
```

The development server binds to local loopback. The application makes no runtime network requests, has no accounts and accepts no uploaded files. It is independently buildable and has no dependency on another project or data directory.

## What to explore

- Analysis context
- Comparison reports
- Selected statistic
- Interpretation boundary

English and Chinese interfaces are provided. Every displayed example and calculated demo value is synthetic. Browser actions do not create real review records or provide production authorization.

See [architecture](docs/ARCHITECTURE.md), [data/publication boundary](docs/PUBLIC_SCOPE.md), and [methodology](docs/METHODS.md).

## 中文说明

RWE · 疑似信号方法的独立公开演示。所有示例均为重新编写的合成资料，用于展示功能、流程和方法；没有真实业务数据、结果或公司源代码。界面复核、过滤、导出与统计数值仅为演示，不能作为真实审计、监管或临床结论。

## Publication

This repository is a public code and frontend showcase. Its static build is available at the [portfolio prototype](https://unravelreggie.github.io/demos/rwe-methods/); there is no backend, production-system connection, public tunnel or external integration. The private operational projects remain separate.
