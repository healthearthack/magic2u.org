export function loadLiveMetrics() {
  fetch("/marketing-site/data/stats.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("live-metrics");

      if (!container) return;

      container.innerHTML = `
        <div class="stat">
          <strong>Teams Adopted:</strong> ${data.adoptionTeams}
        </div>
        <div class="stat">
          <strong>Hours Saved:</strong> ${data.hoursSaved.toLocaleString()}
        </div>
        <div class="stat">
          <strong>Engineering Savings:</strong> $${data.engineeringSavingsUSD.toLocaleString()}
        </div>
        <div class="stat">
          <strong>Components Standardized:</strong> ${data.componentsStandardized}
        </div>
      `;
    });
}

