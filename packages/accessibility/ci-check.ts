import { calculateAccessibilityScore } from './accessibility-score';

export function enforceAccessibilityThreshold(
  violations: any[],
  minScore = 90
) {
  const score = calculateAccessibilityScore(violations);

  if (score < minScore) {
    throw new Error(
      `Accessibility score ${score} is below required threshold ${minScore}`
    );
  }

  return score;
}
