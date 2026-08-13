export type Mode = "light" | "dark" | "high-contrast";
export type Target = "web" | "mobile" | "print" | "campaign";

export type SystemConfig = {
  brandName: string;
  primary: string;
  accent: string;
  radius: number;
  spacing: number;
  fontFamily: string;
  mode: Mode;
  target: Target;
};

export function luminance(hex: string) {
  const value = hex.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(value)) return 0;
  const rgb = [0, 2, 4].map((index) => Number.parseInt(value.slice(index, index + 2), 16) / 255);
  const channels = rgb.map((channel) => channel <= .03928 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4);
  return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
}

export function contrast(a: string, b: string) {
  const [first, second] = [luminance(a), luminance(b)];
  return (Math.max(first, second) + .05) / (Math.min(first, second) + .05);
}

export function readableText(background: string) {
  return contrast(background, "#ffffff") >= contrast(background, "#111827") ? "#ffffff" : "#111827";
}

export function createTokens(config: SystemConfig) {
  const onPrimary = readableText(config.primary);
  const dark = config.mode === "dark" || config.mode === "high-contrast";
  return {
    $schema: "https://www.designtokens.org/schemas/2025.10/format.json",
    metadata: { name: config.brandName, version: "1.0.0", target: config.target, generator: "Magic2U Studio" },
    color: {
      brand: { primary: { $type: "color", $value: config.primary }, accent: { $type: "color", $value: config.accent } },
      content: { onPrimary: { $type: "color", $value: onPrimary }, default: { $type: "color", $value: dark ? "#f5f7f5" : "#171918" } },
      surface: { default: { $type: "color", $value: dark ? "#111318" : "#ffffff" }, subtle: { $type: "color", $value: dark ? "#1b1e1c" : "#f6f7f4" } },
    },
    dimension: {
      radius: { control: { $type: "dimension", $value: `${config.radius}px` }, card: { $type: "dimension", $value: `${config.radius + 6}px` } },
      spacing: { base: { $type: "dimension", $value: `${config.spacing}px` }, section: { $type: "dimension", $value: `${config.spacing * 8}px` } },
    },
    typography: { family: { body: { $type: "fontFamily", $value: config.fontFamily } } },
    accessibility: { primaryContrast: Number(contrast(config.primary, onPrimary).toFixed(2)), standard: "WCAG 2.2 AA" },
  };
}

export function compileCss(config: SystemConfig) {
  const tokens = createTokens(config);
  return `:root {\n  --m2u-color-primary: ${config.primary};\n  --m2u-color-on-primary: ${tokens.color.content.onPrimary.$value};\n  --m2u-color-accent: ${config.accent};\n  --m2u-color-surface: ${tokens.color.surface.default.$value};\n  --m2u-radius-control: ${config.radius}px;\n  --m2u-radius-card: ${config.radius + 6}px;\n  --m2u-space-base: ${config.spacing}px;\n  --m2u-font-body: ${config.fontFamily};\n}`;
}
