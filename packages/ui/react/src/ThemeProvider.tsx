import { createContext, useContext } from "react"

const ThemeContext = createContext(null)

export function ThemeProvider({ theme, children }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
