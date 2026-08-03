import { registerTheme } from './theme-registry';

export function createTheme(config: any) {
  const theme = {
    ...config,
    createdAt: Date.now(),
  };

  registerTheme(theme);
  return theme;
}
