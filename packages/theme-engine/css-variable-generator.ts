export function generateCSSVariables(tokens: Record<string, string>) {
  return Object.entries(tokens)
    .map(([key, value]) => `--${key}: ${value};`)
    .join("\n");
}

