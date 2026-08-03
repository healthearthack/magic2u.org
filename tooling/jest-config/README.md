# 🧪 Magic2U Monorepo — Testing Configuration (Jest + TypeScript)

Magic2U uses **Jest** as the primary testing framework across all packages and applications. Jest provides a fast, reliable, and TypeScript‑friendly environment for validating UI components, utilities, theme logic, analytics modules, and more.

This testing setup ensures that Magic2U remains stable, predictable, and easy to contribute to as the design system grows.

---

## 🎯 Why Jest?

Jest is a great fit for Magic2U because it offers:

- Zero‑config TypeScript support via `ts-jest`
- A simulated browser environment (`jsdom`)
- Snapshot testing for UI components
- Fast parallel execution
- Built‑in mocking utilities
- Strong ecosystem support

This makes it ideal for a design system that spans UI, tokens, theming, and analytics.

---

## 🧩 Jest Configuration Overview

Magic2U’s Jest config focuses on two core behaviors:

### **1. Browser‑like Testing with jsdom**

```js
testEnvironment: "jsdom"

