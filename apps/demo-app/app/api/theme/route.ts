import { NextResponse } from "next/server"
import { baseTokens } from "@magic2u/tokens"
import { createTheme } from "@magic2u/theme-engine"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const brand = searchParams.get("brand")

  if (brand === "unitedhealthcare") {
    const theme = createTheme(baseTokens, {
      colors: { primary: "#0057B8" },
    })
    return NextResponse.json(theme)
  }

  return NextResponse.json(baseTokens)
}
