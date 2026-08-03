import React from "react";
import ReactDOM from "react-dom/client";
import { AdoptionChart } from "./charts/AdoptionChart";
import { forecastGrowth } from "./forecasting/ForecastEngine";

const forecast = forecastGrowth(38, 0.25, 5);

function App() {
  return (
    <div>
      <h1>Metrics Dashboard</h1>
      <AdoptionChart data={forecast} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

