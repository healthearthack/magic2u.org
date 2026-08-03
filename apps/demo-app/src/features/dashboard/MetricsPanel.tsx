// ------------------------------------------------------------
// Imports
// ------------------------------------------------------------

// Custom hook responsible for fetching or computing metrics.
// This abstraction keeps data‑loading logic OUT of the UI layer,
// making the component cleaner, more testable, and easier to evolve.
import { useMetrics } from "../../hooks/useMetrics";

// Reusable presentational component for displaying a single KPI.
// This keeps the visual structure consistent across dashboards.
import { StatCard } from "../../components/StatCard";


// ------------------------------------------------------------
// MetricsPanel Component
// ------------------------------------------------------------
// This component is a lightweight dashboard section that displays
// a grid of KPI cards. It relies on the useMetrics hook to supply
// the data, keeping the component focused purely on presentation.
//
// This separation of concerns is ideal for:
//   - analytics dashboards
//   - enterprise reporting surfaces
//   - modular UI composition
// ------------------------------------------------------------
export function MetricsPanel() {

  // ----------------------------------------------------------
  // Destructure the "data" object returned by the useMetrics hook.
  //
  // The hook likely handles:
  //   - fetching data
  //   - caching
  //   - loading/error states
  //   - transforming raw API responses
  //
  // By abstracting this logic away, MetricsPanel stays clean and
  // focused on rendering.
  // ----------------------------------------------------------
  const { data } = useMetrics();


  // ----------------------------------------------------------
  // Loading state
  //
  // If the hook hasn't returned data yet, show a simple loading
  // message. This prevents rendering errors and improves UX.
  //
  // In a production design system, you'd likely replace this with:
  //   - a skeleton loader
  //   - shimmer placeholders
  //   - a branded loading indicator
  // ----------------------------------------------------------
  if (!data) return <p>Loading metrics...</p>;


  // ----------------------------------------------------------
  // Main Render
  //
  // The layout uses a simple 2‑column CSS grid with spacing.
  // This keeps the UI clean, readable, and responsive.
  //
  // Each StatCard receives:
  //   - label → human‑readable metric name
  //   - value → formatted number (toLocaleString for readability)
  //
  // This pattern is scalable and easy to extend with additional KPIs.
  // ----------------------------------------------------------
  return ( 
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}> 
      <StatCard label="Members" value={data.members.toLocaleString()} /> 
      <StatCard label="Digital Users" value={data.digitalUsers.toLocaleString()} /> 
      <StatCard label="Hours Saved" value={data.hoursSaved.toLocaleString()} /> 
      <StatCard label="Engineering Savings" value={`$${data.savings.toLocaleString()}`} /> 
    </div> 
  ); 
}
