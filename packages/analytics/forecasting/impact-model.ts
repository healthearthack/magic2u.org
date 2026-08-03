export function impactScore(
  users: number,
  avgRevenuePerUser: number
): number {
  return users * avgRevenuePerUser;
}

