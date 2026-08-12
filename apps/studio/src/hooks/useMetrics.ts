// ------------------------------------------------------------
// React Imports
// ------------------------------------------------------------
// useState → stores the metrics data once fetched
// useEffect → runs the data‑loading side effect on component mount
//
// This hook encapsulates all logic related to retrieving,
// transforming, and exposing metric data to the UI layer.
import { useEffect, useState } from "react";


// ------------------------------------------------------------
// useMetrics Hook
// ------------------------------------------------------------
// This custom hook provides a clean, declarative API for accessing
// enterprise metrics throughout the application.
//
// It abstracts away:
//   - data fetching
//   - JSON parsing
//   - field normalization
//   - state management
//
// Components that consume this hook don’t need to know *where*
// the data comes from or *how* it’s shaped — they simply receive
// a ready‑to‑use metrics object.
//
// This is exactly the kind of separation of concerns that makes
// Magic2U scalable and maintainable.
// ------------------------------------------------------------
export function useMetrics() {

  // ----------------------------------------------------------
  // Local State
  // ----------------------------------------------------------
  // Holds the normalized metrics object once loaded.
  //
  // Initially null → allows consumers to show loading states.
  //
  // In a production system, this would likely be strongly typed:
  //   const [data, setData] = useState<Metrics | null>(null)
  //
  // For now, "any" keeps the example flexible.
  // ----------------------------------------------------------
  const [data, setData] = useState<any>(null);


  // ----------------------------------------------------------
  // Data Fetching Side Effect
  // ----------------------------------------------------------
  // useEffect with an empty dependency array [] ensures this
  // fetch runs exactly once — when the component using this hook
  // first mounts.
  //
  // fetch("/mock-data.json"):
  //   - Loads a local JSON file (simulating an API)
  //   - Parses the response
  //   - Normalizes the fields into a clean metrics object
  //
  // This normalization step is important because it decouples
  // the UI from the raw backend schema. If the backend changes,
  // only this hook needs updating — not every component.
  // ----------------------------------------------------------
  useEffect(() => { 
    fetch("/mock-data.json") 
      .then(res => res.json()) 
      .then(json => { // ------------------------------------------------------ 
        // Data Normalization 
        // ------------------------------------------------------ 
        // The raw JSON fields are mapped into a clean, predictable 
        // structure. This ensures that all consumers of this hook 
        // receive consistent naming and formatting. 
        //
        // This is a subtle but powerful architectural pattern: 
        // UI components depend on *normalized domain data*, 
        // not raw API responses. 
        // ------------------------------------------------------ 
        setData({ 
          members: json.members, 
          digitalUsers: json.estimatedDigitalUsers, 
          hoursSaved: json.estimatedTimeSavedHours, 
          savings: json.estimatedEngineeringSavingsUSD 
        }); 
      }); 
  }, []); 

 // ---------------------------------------------------------- 
 // Return API 
 // ---------------------------------------------------------- 
 // The hook returns the normalized metrics object. 
 // 
 // This pattern makes the hook easy to extend later: 
 // return { data, refresh, loading, error } 
 // 
 // For now, the API stays intentionally minimal. 
 // ---------------------------------------------------------- 
 return { data }; 
}
