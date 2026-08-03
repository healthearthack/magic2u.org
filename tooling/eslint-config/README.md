# 🧹 Magic2U Monorepo — ESLint Configuration

Magic2U uses a unified ESLint configuration to ensure consistent code quality, predictable behavior, and maintainable patterns across every workspace in the monorepo. This includes:

- UI components  
- Theme engine  
- Token libraries  
- Analytics modules  
- Storybook  
- Documentation apps  
- Internal tooling  

A shared linting strategy reinforces the Magic2U principles of clarity, reliability, and architectural hygiene.

---

## 📐 Why ESLint Matters in a Design System

A design system is a long‑lived, high‑visibility codebase. Small inconsistencies compound quickly. ESLint helps us:

- Catch bugs before runtime  
- Enforce consistent patterns across teams  
- Maintain readability and predictability  
- Prevent regressions as the system grows  
- Support contributors with clear expectations  

This is especially important in a monorepo where multiple packages depend on each other.

---

## 🧩 ESLint Configuration Overview

Magic2U’s ESLint config blends three rule sets:

### **1. `eslint:recommended`**
Core JavaScript correctness rules:
- Prevents accidental globals  
- Flags unused variables  
- Enforces safe syntax  

### **2. `plugin:react/recommended`**
Ensures React best practices for:
- Storybook  
- Documentation sites  
- React wrappers around Web Components  

### **3. `plugin:@typescript-eslint/recommended`**
Adds TypeScript‑aware linting:
- Prevents unsafe patterns  
- Enforces type‑driven correctness  
- Improves static analysis  

---

## 🗂 ESLint Config File

```js
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"]
};

