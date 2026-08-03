export function exportCSV(data: Record<string, any>[]): string {
  const headers = Object.keys(data[0]).join(',');
  const rows = data
    .map(row => Object.values(row).join(','))
    .join('\n');

  return `${headers}\n${rows}`;
}

