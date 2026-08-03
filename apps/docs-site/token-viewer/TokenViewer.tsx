// ------------------------------------------------------------
// Design Token Object
// ------------------------------------------------------------
// This object defines a small set of core design tokens used
// throughout the demo application. Tokens are the atomic,
// reusable values that form the visual language of a design
// system.
//
// Each key represents a semantic concept (primary color,
// background color, radius, spacing), not a raw CSS value.
// This abstraction allows the UI to evolve without requiring
// component-level changes.
//
// In a full Magic2U environment, these tokens would be:
//   - auto-generated from a tokens pipeline
//   - exported as CSS variables
//   - consumed by components, utilities, and themes
// ------------------------------------------------------------
const tokens = {
  // Primary brand color used for buttons, highlights, and accents.
  primary: "#2563eb",

  // Global background color for dark-mode surfaces.
  background: "#0f172a",

  // Standard border radius for cards, inputs, and UI primitives.
  radius: "12px",

  // Base spacing unit used for padding, margins, and layout rhythm.
  spacing: "16px"
};


// ------------------------------------------------------------
// TokenViewer Component
// ------------------------------------------------------------
// A simple UI component that displays the design tokens in a
// readable list. This is extremely useful for:
//
//   - debugging token values
//   - onboarding contributors
//   - visually verifying theme changes
//   - demonstrating the design system’s foundation
//
// The component is intentionally minimal and purely presentational.
// It does not manage state or logic — it simply renders the tokens.
// ------------------------------------------------------------
export function TokenViewer() {
  return (
    <div>
      {/* ----------------------------------------------
          Section Heading
          ----------------------------------------------
          Introduces the token list. In a real design-system
          documentation site, this might be part of a larger
          "Foundations" section.
      */}
      <h2>Design Tokens</h2>

      {/* ----------------------------------------------
          Token List Rendering
          ----------------------------------------------
          Object.entries(tokens) converts the token object into
          an array of [key, value] pairs, making it easy to map
          over and render each token.
          
          Example:
            ["primary", "#2563eb"]
            ["radius", "12px"]
          
          Each token is displayed as:
            <strong>key</strong>: value
          
          This keeps the UI clean and readable.
      */}
      {Object.entries(tokens).map(([key, value]) => (
        <div key={key}>
          <strong>{key}</strong>: {value}
        </div>
      ))}
    </div>
  );
}

