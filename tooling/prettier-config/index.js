// ------------------------------------------------------------
// Prettier Configuration for the Magic2U Monorepo
// ------------------------------------------------------------
// Prettier is the opinionated code formatter used across the
// entire Magic2U ecosystem. It ensures that every file —
// TypeScript, JavaScript, JSON, Markdown, CSS — follows a
// consistent formatting style.
//
// Why this matters:
//   - Eliminates formatting debates
//   - Keeps diffs clean and readable
//   - Ensures consistency across apps, packages, and tooling
//   - Improves onboarding for contributors
//
// This config defines the formatting rules that apply repo‑wide.
// ------------------------------------------------------------

module.exports = {
  // ------------------------------------------------------------
  // semi: true
  // ------------------------------------------------------------
  // Controls whether Prettier inserts semicolons at the end of
  // statements.
  //
  // Setting this to true enforces:
  //   - explicit statement termination
  //   - fewer accidental ASI (Automatic Semicolon Insertion) bugs
  //   - consistency across all codebases in the monorepo
  //
  // This is especially helpful in large teams and multi‑package
  // environments where implicit semicolon behavior can cause
  // subtle issues.
  semi: true,

  // ------------------------------------------------------------
  // singleQuote: false
  // ------------------------------------------------------------
  // Determines whether Prettier uses single or double quotes.
  //
  // Setting this to false means:
  //   - Prettier will use double quotes
  //   - JSON‑like consistency across the repo
  //   - Better alignment with many UI frameworks and config files
  //
  // This also avoids escaping issues when writing JSX attributes. 
  singleQuote: false, 
  
  // ------------------------------------------------------------ 
  // trailingComma: "all" 
  // ------------------------------------------------------------ 
  // Controls whether Prettier adds trailing commas in objects, 
  // arrays, imports, and function parameters. 
  //
   // "all" means: 
  // - Always add trailing commas where valid 
  // - Cleaner diffs (only the changed line appears in PRs) 
  // - Easier multi‑line editing 
  // 
  // This is a best practice for long‑lived codebases and 
  // monorepos with many contributors. trailingComma: "all" 
  };
