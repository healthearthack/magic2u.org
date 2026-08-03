export function adoptionModel(
  initialUsers: number,
  monthlyGrowthRate: number,
  months: number
): number[] {
  const results: number[] = [];

  let users = initialUsers;

  for (let i = 0; i < months; i++) {
    users = users * (1 + monthlyGrowthRate);
    results.push(Math.round(users));
  }

  return results;
}

