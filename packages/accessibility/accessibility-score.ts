export interface AxeViolation {
  id: string;
  impact: 'minor' | 'moderate' | 'serious' | 'critical';
}

export function calculateAccessibilityScore(violations: AxeViolation[]): number {
  const weights = {
    minor: 1,
    moderate: 3,
    serious: 6,
    critical: 10,
  };

  const totalPenalty = violations.reduce((sum, v) => {
    return sum + weights[v.impact];
  }, 0);

  const score = Math.max(0, 100 - totalPenalty);
  return score;
}
