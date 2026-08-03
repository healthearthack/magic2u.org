export function forecastGrowth(base: number, growth: number, years: number) {
  const results = [];
  let current = base;

  for (let i = 0; i < years; i++) {
    current = Math.round(current * (1 + growth));
    results.push(current);
  }

  return results;
}
