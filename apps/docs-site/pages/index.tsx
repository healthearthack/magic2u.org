// ------------------------------------------------------------
// Import: DocLayout
// ------------------------------------------------------------
// DocLayout is the page‑level wrapper responsible for providing
// consistent documentation‑style structure across the site.
// It typically includes:
//
//   - global padding and spacing
//   - typography rules
//   - navigation or sidebar scaffolding
//   - content width constraints
//
// By wrapping page content in DocLayout, every documentation page
// inherits a unified visual and structural identity. This is a
// cornerstone of design‑system documentation: consistency at scale.
import { DocLayout } from "../components/DocLayout";


// ------------------------------------------------------------
// Import: AdoptionGraph
// ------------------------------------------------------------
// AdoptionGraph is a feature‑level visualization component that
// displays adoption trends, growth curves, or usage metrics for
// the Magic2U design system.
//
// Importing it here keeps the Home page focused on composition,
// not implementation. The graph itself remains encapsulated in
// its own feature module, following the Feature → Component pattern.
import { AdoptionGraph } from "../adoption-graphs/AdoptionGraph";


// ------------------------------------------------------------
// Home Page Component
// ------------------------------------------------------------
// This component represents the root documentation page for the
// Magic2U Design System. It serves as the landing surface for
// anyone exploring the system, providing:
//
//   - a clear title
//   - a structured layout
//   - a visual entry point (AdoptionGraph)
//
// The page is intentionally minimal. Its job is not to contain
// logic or styling, but to compose layout + content in a clean,
// predictable way.
//
// This mirrors the Page → Layout → Feature → Component hierarchy
// used throughout Magic2U.
export default function Home() {
  return (
    // --------------------------------------------------------
    // DocLayout Wrapper
    // --------------------------------------------------------
    // All page content is wrapped in DocLayout to ensure
    // consistent spacing, typography, and documentation styling.
    // This keeps the page clean and prevents layout duplication.
    <DocLayout>

      {/* ----------------------------------------------
          Page Title
          ----------------------------------------------
          The main heading for the documentation homepage.
          This establishes the identity of the page and sets
          the tone for the content that follows.
      */}
      <h1>Magic2U Design System</h1>

      {/* ----------------------------------------------
          Adoption Graph Visualization
          ----------------------------------------------
          Displays adoption metrics or growth trends for the
          design system. This gives visitors an immediate,
          data‑driven sense of the system’s impact.
      */}
      <AdoptionGraph />
    </DocLayout>
  );
}
