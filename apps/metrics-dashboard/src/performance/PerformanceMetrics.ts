export function calculateBundleImpact(bundleSizeKb: number) {
  return {
    estimatedLoadTime: bundleSizeKb * 0.02,
    performanceScore: 100 - bundleSizeKb * 0.1
  };
}
