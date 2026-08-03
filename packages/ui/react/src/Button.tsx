import { useTheme } from "./ThemeProvider"

export function Button({ children }) {
  const theme = useTheme()

  return (
    <button
      style={{
        background: theme.colors.primary,
        color: "#fff",
        padding: "12px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  )
}

