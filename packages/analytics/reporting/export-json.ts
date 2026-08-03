export function exportJSON(data: unknown): string {
  return JSON.stringify(data, null, 2);
}

