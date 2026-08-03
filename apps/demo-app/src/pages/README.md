# 🗂 Page-Level Components Overview

This section documents two foundational page-level components in the Magic2U application:

- **HomePage** — The root landing page that delegates to the main dashboard
- **EnterprisePage** — A narrative-driven page describing enterprise rollout strategy

These components follow Magic2U’s architectural philosophy of clean composition, modularity, and separation of concerns.

---

## 🏠 1. HomePage

### **Purpose**

`HomePage` serves as the root-level entry point for the application. It is intentionally minimal and delegates all UI rendering to `DashboardPage`.

### **Key Responsibilities**

- Acts as the top-level route for `/`
- Composes the main dashboard without adding logic
- Provides a clean boundary between routing and UI

### **Code Summary**

```tsx
export function HomePage() {
  return <DashboardPage />;
}

