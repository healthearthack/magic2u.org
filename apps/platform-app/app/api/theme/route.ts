import { baseTokens } from "@magic2u/tokens"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const brand = searchParams.get("brand")

  if (brand === "unitedhealthcare") {
    return Response.json({
      ...baseTokens,
      colors: {
        ...baseTokens.colors,
        primary: "#0057B8"
      }
    })
  }

  return Response.json(baseTokens)
}
