export function analyzeComponent(source: string) {
  return {
    hasHooks: source.includes('use'),
    lines: source.split('\n').length,
  };
}

