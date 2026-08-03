// ------------------------------------------------------------
// Imports
// ------------------------------------------------------------

// MetricsPanel:
//   A modular dashboard section responsible for rendering
//   KPI tiles using StatCard components. It handles data
//   retrieval via the useMetrics hook and presents a clean,
//   grid‑based layout.
import { MetricsPanel } from "./MetricsPanel";

// CompanyOverview:
//   A higher‑level, narrative component that likely displays
//   contextual information about the organization — mission,
//   summary metrics, or descriptive content.
//   This sits above the KPIs to provide framing and meaning.
import { CompanyOverview } from "./CompanyOverview";


// ------------------------------------------------------------
// DashboardPage Component
// ------------------------------------------------------------
// This component acts as a *page‑level layout container*.
// It composes multiple dashboard sections into a single,
// cohesive view.
//
// Responsibilities:
//   - Provide page‑level spacing and structure
//   - Render high‑level overview content (CompanyOverview)
//   - Render KPI metrics (MetricsPanel)
//   - Keep the page clean, readable, and modular
//
// This is a classic pattern in scalable UI architecture:
//   Page → Sections → Components → Primitives
//
// DashboardPage sits at the “Page” layer.
// ------------------------------------------------------------
export function DashboardPage() {
  return (
    // --------------------------------------------------------
    // Page Container
    // --------------------------------------------------------
    // Inline padding provides breathing room around the content.
    // In a production design system, this would be replaced with:
    //   - spacing tokens
    //   - layout primitives
    //   - responsive container components
    //
    // The page intentionally does NOT handle data or business
    // logic — it simply composes sections.
    // --------------------------------------------------------
    <div style={{ padding: "40px" }}>
      
      {/* ----------------------------------------------
          Company Overview Section
          ----------------------------------------------
          This component likely provides narrative context:
            - company summary
            - mission statement
            - high‑level insights
            - descriptive analytics
          
          Placing it first establishes meaning before showing
          raw metrics.
      */}
      <CompanyOverview />

      {/* ----------------------------------------------
          Metrics Panel Section 
          ---------------------------------------------- 
          Displays KPI tiles in a grid layout. This section is purely presentational and relies on the useMetrics hook for data. 
          
          The separation between CompanyOverview and MetricsPanel keeps the dashboard modular and easy to extend. 
        */} 
        <MetricsPanel /> 
    </div> 
  ); 
}
