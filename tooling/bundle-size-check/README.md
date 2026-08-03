# 📦 Magic2U Monorepo — Bundle Size Governance

Magic2U is built as a modern, high‑performance monorepo containing multiple applications, packages, and internal tooling. To maintain strict performance standards across the entire ecosystem, we enforce **bundle size budgets** on critical build artifacts.

This ensures that every consumer of the Magic2U Design System — from Storybook to production apps — benefits from fast, lightweight, predictable performance.

---

## 🎯 Why Bundle Size Limits Matter

Design systems tend to grow over time. Without guardrails, a single dependency or poorly‑scoped import can inflate the bundle and degrade performance across every app that consumes it.

Magic2U prevents this by:

- Setting explicit size budgets  
- Tracking growth over time  
- Failing CI when regressions occur  
- Encouraging modular, tree‑shakable architecture  

This aligns with Magic2U’s core principles:

- **Performance as a feature**  
- **Predictable developer experience**  
- **Scalable, maintainable architecture**  

---

## 🗂 File: `size-limit.config.js`

This configuration defines size budgets for key build outputs.

```js
module.exports = [
  {
    path: "packages/ui/dist/index.js",
    limit: "50 KB"
  }
];

