📦 TokenViewer — Design Token Inspector

TokenViewer is a lightweight utility component that displays the core design tokens used throughout the Magic2U demo application. It provides a simple, visual way to inspect foundational values such as colors, spacing, and radii — the atomic building blocks of the design system.

This component is especially useful for:

    onboarding contributors

    debugging token values

    validating theme changes

    demonstrating the design system’s foundations

🧩 Component Overview

The component renders a list of key/value pairs derived from a token object:
tsx

const tokens = {
  primary: "#2563eb",
  background: "#0f172a",
  radius: "12px",
  spacing: "16px"
};

These values represent the semantic primitives of the UI:

    primary → brand accent color

    background → global dark surface color

    radius → standard border rounding

    spacing → base layout rhythm

🖥️ How It Works

TokenViewer uses Object.entries() to iterate over the token object and render each token in a readable format:
tsx

{Object.entries(tokens).map(([key, value]) => (
  <div key={key}>
    <strong>{key}</strong>: {value}
  </div>
))}

This keeps the component:

    simple

    declarative

    easy to extend

    aligned with design‑system best practices

📁 File Structure
Code

components/
└── TokenViewer.tsx

🚀 Usage Example
tsx

import { TokenViewer } from "./components/TokenViewer";

export function App() {
  return (
    <div style={{ padding: 40 }}>
      <TokenViewer />
    </div>
  );
}

🧠 Design-System Philosophy

TokenViewer reinforces Magic2U’s core principles:
1. Single Source of Truth

Tokens define the visual language — not hard‑coded values.
2. Semantic Naming

Tokens describe meaning, not appearance.
3. Developer Visibility

Surfacing tokens helps contributors understand the system quickly.
4. Extensibility

The token object can grow into:

    multi‑theme support

    light/dark mode

    CSS variable exports

    automated token pipelines

🪄 Summary

TokenViewer is a small but powerful component that:

    exposes the design system’s foundational values

    improves developer experience

    supports debugging and documentation

    demonstrates Magic2U’s design‑system philosophy

It’s a perfect entry point for understanding how the visual language of the system is structured.
