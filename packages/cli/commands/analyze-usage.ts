export function analyzeUsage(logs: any[]) {
  const summary: Record<string, number> = {};

  logs.forEach(log => {
    summary[log.component] =
      (summary[log.component] || 0) + 1;
  });

  return summary;
}

