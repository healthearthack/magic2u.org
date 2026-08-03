import fs from "fs";
import globalTokens from "./global.json";
import semanticTokens from "./semantic.json";
import componentTokens from "./component.json";

export function buildTokens() {
  const combined = {
    ...globalTokens,
    ...semanticTokens,
    ...componentTokens
  };

  fs.writeFileSync(
    "dist/tokens.json",
    JSON.stringify(combined, null, 2)
  );
}

