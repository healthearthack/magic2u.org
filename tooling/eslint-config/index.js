// ------------------------------------------------------------
// ESLint Configuration for the Magic2U Monorepo
// ------------------------------------------------------------
// This configuration establishes a consistent linting baseline
// across all packages and apps in the Magic2U ecosystem.
//
// It blends three layers of linting:
//   1. ESLint core rules (JavaScript correctness)
//   2. React best practices (for Storybook, docs, and UI wrappers)
//   3. TypeScript-specific rules (type safety + static analysis)
//
// This ensures:
//   - predictable code quality
//   - consistent formatting expectations
//   - early detection of bugs
//   - clean, maintainable code across the entire monorepo
// ------------------------------------------------------------

module.exports = {
  // ------------------------------------------------------------
  // extends
  // ------------------------------------------------------------
  // These presets define the rule sets ESLint will inherit.
  //
  // "eslint:recommended"
  //   - Enables core JavaScript best practices
  //   - Catches common pitfalls (unused vars, accidental globals)
  //
  // "plugin:react/recommended"
  //   - Ensures React components follow best practices
  //   - Required for Storybook, docs sites, and React wrappers
  //
  // "plugin:@typescript-eslint/recommended"
  //   - Adds TypeScript-aware linting rules
  //   - Prevents unsafe patterns that TS alone won’t catch
  //
  // Together, these create a strong, modern linting foundation.
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],

  // ------------------------------------------------------------
  // parser
  // ------------------------------------------------------------
  // ESLint cannot understand TypeScript syntax by default.
  // This parser allows ESLint to read:
  //   - types
  //   - interfaces
  //   - enums
  //   - generics
  //   - modern TS syntax
  //
  // It does NOT perform type-checking — that’s handled by tsc.
  parser: "@typescript-eslint/parser",

  // ------------------------------------------------------------
  // plugins
  // ------------------------------------------------------------
  // Plugins extend ESLint with additional rule sets.
  //
  // "@typescript-eslint"
  //   - Adds rules that understand TypeScript semantics
  //   - Helps enforce safe, predictable TS usage
  //
  // Additional plugins (React Hooks, Prettier, etc.) can be added
  // later as the monorepo grows.
  plugins: ["@typescript-eslint"]
};
