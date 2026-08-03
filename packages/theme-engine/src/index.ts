import { TokenSet } from "@magic2u/tokens"

export type BrandTheme = TokenSet

export function createTheme(
  base: TokenSet,
  overrides: Partial<TokenSet>
): BrandTheme {
  return {
    ...base,
    ...overrides,
    colors: {
      ...base.colors,
      ...overrides.colors,
    },
    radius: {
      ...base.radius,
      ...overrides.radius,
    },
  }
}
