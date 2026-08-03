export function calculateROI(
  revenue: number,
  cost: number
): number {
  return ((revenue - cost) / cost) * 100;
}

