# 🎨 Global Styles — Application Baseline

Magic2U establishes a clean, predictable visual foundation using a minimal global CSS reset. These rules apply to the entire application and ensure consistent rendering across browsers, devices, and UI surfaces.

This file defines the baseline typography, spacing, and background canvas for the design system.

---

## 🧩 Purpose of Global Styles

Global styles serve three critical roles:

1. **Reset browser defaults**  
   Browsers apply inconsistent margins, fonts, and spacing. Resetting them ensures predictable layouts.

2. **Establish a unified visual baseline**  
   Typography, background color, and spacing should feel consistent across every page and component.

3. **Provide a canvas for the design system**  
   Components from Magic2U inherit these global rules, ensuring they render consistently in any environment.

---

## 📝 Global CSS Snippet

```css
body {
  margin: 0;
  font-family: Inter, system-ui;
  background: #0f172a;
}
