const registry: Record<string, any> = {};

export function registerTheme(theme: any) {
  registry[theme.name] = theme;
}

export function getTheme(name: string) {
  return registry[name];
}

