// ------------------------------------------------------------
// Imports
// ------------------------------------------------------------

// React hooks for state and lifecycle behavior.
// useState → stores component state (the fetched metrics data)
// useEffect → runs side‑effects (fetching data on mount)
import { useEffect, useState } from "react";

// A presentational component responsible for rendering
// a single metric tile (label + value). This keeps the
// dashboard layout clean and modular.
import { MetricsCard } from "./StatsCard";


// ------------------------------------------------------------
// EnterpriseDashboard Component
// ------------------------------------------------------------
// This component renders a high‑level enterprise metrics dashboard.
// It fetches data from a local JSON file and displays key KPIs
// using reusable <MetricsCard /> components.
//
// The structure is intentionally simple:
//   - Fetch data on mount
//   - Show a loading state
//   - Render a grid of metric cards once data is available
//
// This pattern scales well for real APIs, analytics pipelines,
// or server‑driven dashboards.
// ------------------------------------------------------------
export function EnterpriseDashboard() {

  // ----------------------------------------------------------
  // Local state to store fetched metrics.
  // Initially null → triggers the loading state.
  //
  // Type is "any" for now, but in a production design system
  // you'd replace this with a typed interface for stronger safety.
  // ----------------------------------------------------------
  const [data, setData] = useState<any>(null);


  // ----------------------------------------------------------
  // Fetch metrics on component mount.
  //
  // useEffect with an empty dependency array [] ensures this
  // runs exactly once — the moment the component is first rendered.
  //
  // fetch("/mock-data.json"):
  //   - Loads a local JSON file (could be replaced with an API)
  //   - Converts the response to JSON
  //   - Stores it in state via setData
  //
  // This is the simplest possible data‑loading pattern.
  // ----------------------------------------------------------
  useEffect(() => {
    fetch("/mock-data.json")
      .then(res => res.json())
      .then(setData);
  }, []);


  // ----------------------------------------------------------
  // Loading state
  //
  // If data hasn't been fetched yet, show a simple placeholder.
  // This prevents rendering errors and improves UX.
  // ----------------------------------------------------------
  if (!data) return <div>Loading...</div>;


  // ----------------------------------------------------------
  // Main dashboard layout
  //
  // The container uses:
  //   - padding for spacing
  //   - a dark background for contrast
  //
  // The grid uses:
  //   - 2 columns
  //   - consistent spacing
  //   - responsive, simple layout
  //
  // Each MetricsCard receives:
  //   - label → human‑readable metric name
  //   - value → formatted number (with commas)
  //
  // This structure is clean, scalable, and easy to extend.
  // ----------------------------------------------------------
  return (
    <div style={{ padding: "40px", background: "#0f172a" }}>
      <h1 style={{ color: "white" }}>
        Enterprise Impact Dashboard
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        marginTop: "20px"
      }}>
        <MetricsCard
          label="Members"
          value={data.members.toLocaleString()}
        />
        <MetricsCard
          label="Digital Users"
          value={data.estimatedDigitalUsers.toLocaleString()}
        />
        <MetricsCard
          label="Hours Saved"
          value={data.estimatedTimeSavedHours.toLocaleString()}
        />
        <MetricsCard
          label="Engineering Savings"
          value={`$${data.estimatedEngineeringSavingsUSD.toLocaleString()}`}
        />
      </div>
    </div>
  );
}

