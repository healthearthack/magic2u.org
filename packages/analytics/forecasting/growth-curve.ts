export function logisticGrowth(
  current: number,
  rate: number,
  capacity: number
): number {
  return current + rate * current * (1 - current / capacity);
}

