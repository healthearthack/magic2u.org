// ------------------------------------------------------------
// Jest Configuration for the Magic2U Monorepo
// ------------------------------------------------------------
// This configuration defines how Jest should execute tests
// across Magic2U’s TypeScript‑based design system and apps.
//
// Jest is used here because:
//   - It integrates cleanly with TypeScript
//   - It supports DOM‑like testing via jsdom
//   - It works well for component, utility, and unit tests
//
// This file ensures consistent test behavior across all packages.
// ------------------------------------------------------------

module.exports = {
  // ------------------------------------------------------------
  // testEnvironment: "jsdom"
  // ------------------------------------------------------------
  // Jest normally runs in a Node environment, which does NOT
  // include browser APIs like:
  //   - document
  //   - window
  //   - HTMLElement
  //
  // Setting the environment to "jsdom" gives Jest a simulated
  // browser environment. This is essential for:
  //   - UI component tests
  //   - DOM manipulation tests
  //   - React component rendering
  //   - Storybook snapshot tests
  //
  // Without jsdom, any test touching the DOM would fail.
  testEnvironment: "jsdom",

  // ------------------------------------------------------------
  // transform
  // ------------------------------------------------------------
  // Jest cannot execute TypeScript files natively.
  // The transform section tells Jest how to compile TS/TSX
  // before running tests.
  //
  // "^.+\\.tsx?$": "ts-jest"
  //   - Applies ts-jest to any .ts or .tsx file
  //   - Allows Jest to understand TypeScript syntax
  //   - Integrates with your tsconfig for consistent behavior
  //
  // This is the backbone of TypeScript testing in the monorepo.
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
