// ------------------------------------------------------------
// CodeBlock Component
// ------------------------------------------------------------
// CodeBlock is a small but foundational documentation primitive.
// It provides a consistent, styled container for rendering
// code snippets inside your Magic2U documentation pages.
//
// Why this matters:
//   - Documentation relies heavily on readable code examples
//   - Consistent styling improves clarity and professionalism
//   - A dedicated component prevents duplication of inline styles
//   - It creates a single source of truth for code formatting
//
// In a full design system, CodeBlock might evolve into a more
// advanced component with syntax highlighting, copy-to-clipboard
// controls, line numbers, or theme-aware styling. For now, it
// provides a clean, readable, dark-themed code surface.
// ------------------------------------------------------------
export function CodeBlock({ code }: { code: string }) {
  return (
    // --------------------------------------------------------
    // <pre> Element
    // --------------------------------------------------------
    // <pre> preserves whitespace and formatting, making it ideal
    // for displaying code exactly as written. The inline styles
    // create a dark, high-contrast code container that aligns
    // with the Magic2U aesthetic.
    //
    // Style breakdown:
    //   background: dark slate tone for contrast
    //   padding: internal spacing for readability
    //   borderRadius: softened corners for a modern feel
    //   color: cyan accent for code text
    //
    // These values mirror the design-system palette and spacing
    // conventions used across the demo app.
    // --------------------------------------------------------
    <pre style={{
      background: "#0f172a",
      padding: 20,
      borderRadius: 8,
      color: "#38bdf8"
    }}>
      {/* ----------------------------------------------
          Code Content
          ----------------------------------------------
          The code string is rendered directly inside the <pre>
          block. Because <pre> preserves whitespace, indentation,
          and line breaks, the code appears exactly as intended.
      */}
      {code}
    </pre>
  );
}

