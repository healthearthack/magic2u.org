# ✨ Magic2U Monorepo — Prettier Configuration

Magic2U uses **Prettier** as the official code formatter across the entire monorepo. Prettier ensures that every file — from TypeScript to Markdown — follows a consistent, predictable formatting style.

This eliminates formatting debates, reduces friction in code reviews, and keeps the codebase clean and approachable for contributors.

---

## 🎯 Why Prettier?

Prettier provides:

- Automatic formatting on save  
- Consistent style across all packages  
- Clean diffs and predictable merges  
- Zero bikeshedding about code style  
- A smoother onboarding experience for new contributors  

In a design system monorepo like Magic2U, consistency is a feature.

---

## 🧩 Prettier Configuration Overview

Magic2U’s Prettier config enforces three core rules:

### **1. Semicolons Enabled**

```js
semi: true

