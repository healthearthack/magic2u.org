export type TokenSet = {
  colors: {
    primary: string
    background: string
    text: string
  }
  radius: {
    sm: string
    md: string
    lg: string
  }
}

export const baseTokens: TokenSet = {
  colors: {
    primary: "#111827",
    background: "#ffffff",
    text: "#111827",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
}
