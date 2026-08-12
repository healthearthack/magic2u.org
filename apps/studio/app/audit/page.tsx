import pkgUi from "@magic2u/ui-react/package.json"
import pkgEngine from "@magic2u/theme-engine/package.json"
import pkgTokens from "@magic2u/tokens/package.json"

export default function Audit() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Magic2U Cloud System Audit</h1>

      <ul>
        <li>UI React Version: {pkgUi.version}</li>
        <li>Theme Engine Version: {pkgEngine.version}</li>
        <li>Tokens Version: {pkgTokens.version}</li>
      </ul>

      <p>Status: Operational</p>
    </div>
  )
}
