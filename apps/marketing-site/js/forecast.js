export function generateForecast(baseTeams, growthRate, years) {
  const results = [];

  let current = baseTeams;

  for (let i = 1; i <= years; i++) {
    current = Math.round(current * (1 + growthRate));
    results.push({
      year: i,
      projectedTeams: current
    });
  }

  return results;
}

export function renderForecast() {
  const forecast = generateForecast(38, 0.25, 5);

  const container = document.getElementById("forecast");

  if (!container) return;

  container.innerHTML = forecast
    .map(f => `<div>Year ${f.year}: ${f.projectedTeams} teams</div>`)
    .join("");
}

