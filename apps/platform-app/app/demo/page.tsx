"use client"

import { useEffect, useState } from "react"
import { ThemeProvider, Button } from "@magic2u/ui-react"

export default function Demo() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    fetch("/api/theme?brand=unitedhealthcare")
      .then(res => res.json())
      .then(setTheme)
  }, [])

  if (!theme) return <div>Loading theme...</div>

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 40 }}>
        <h1>Enterprise White-Label Demo</h1>
        <Button>Enterprise Button</Button>
      </div>
    </ThemeProvider>
  )
}
