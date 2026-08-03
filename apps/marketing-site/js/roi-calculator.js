export function calculateROI(hoursSaved, hourlyRate) {
  return hoursSaved * hourlyRate;
}

export function attachROICalculator() {
  const button = document.getElementById("calculate-roi");

  if (!button) return;

  button.addEventListener("click", () => {
    const hours = Number(document.getElementById("roi-hours").value);
    const rate = Number(document.getElementById("roi-rate").value);

    const result = calculateROI(hours, rate);

    document.getElementById("roi-result").innerText =
      "$" + result.toLocaleString();
  });
}

