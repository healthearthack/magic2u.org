import { useEffect, useMemo, useState } from "react";
import "./app.css";

type Mode = "light" | "dark";
const presets = [
  { name: "Magic2U", color: "#6d4aff" }, { name: "Northstar Health", color: "#006b5f" },
  { name: "Orbit Finance", color: "#0f5bd8" }, { name: "Ember Studio", color: "#bd3f18" },
];

function luminance(hex: string) {
  const value = hex.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(value)) return 0;
  const rgb = [0, 2, 4].map((index) => Number.parseInt(value.slice(index, index + 2), 16) / 255);
  const channels = rgb.map((channel) => channel <= .03928 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4);
  return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
}
function contrast(a: string, b: string) {
  const [first, second] = [luminance(a), luminance(b)];
  return (Math.max(first, second) + .05) / (Math.min(first, second) + .05);
}

export default function LandingPage() {
  const [brandName, setBrandName] = useState("Magic2U");
  const [primary, setPrimary] = useState("#6d4aff");
  const [radius, setRadius] = useState(14);
  const [mode, setMode] = useState<Mode>("light");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("magic2u-project");
    if (!stored) return;
    try {
      const project = JSON.parse(stored);
      setBrandName(project.brandName ?? "Magic2U"); setPrimary(project.primary ?? "#6d4aff");
      setRadius(project.radius ?? 14); setMode(project.mode === "dark" ? "dark" : "light");
    } catch { window.localStorage.removeItem("magic2u-project"); }
  }, []);

  const textOnPrimary = contrast(primary, "#ffffff") >= contrast(primary, "#111827") ? "#ffffff" : "#111827";
  const ratio = contrast(primary, textOnPrimary);
  const tokens = useMemo(() => ({
    brand: { name: brandName }, color: { primary, onPrimary: textOnPrimary, surface: mode === "dark" ? "#111318" : "#ffffff" },
    radius: { control: `${radius}px`, card: `${radius + 6}px` }, appearance: { mode },
  }), [brandName, primary, textOnPrimary, radius, mode]);

  function saveProject() {
    window.localStorage.setItem("magic2u-project", JSON.stringify({ brandName, primary, radius, mode }));
    setSaved(true); window.setTimeout(() => setSaved(false), 1800);
  }
  function exportTokens() {
    const file = new Blob([JSON.stringify(tokens, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(file); const link = document.createElement("a");
    link.href = url; link.download = `${brandName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "brand"}-tokens.json`;
    link.click(); URL.revokeObjectURL(url);
  }

  return <div className={`product-shell mode-${mode}`} style={{ "--brand": primary, "--on-brand": textOnPrimary, "--radius": `${radius}px` } as React.CSSProperties}>
    <header className="topbar"><a className="wordmark" href="#top" aria-label="Magic2U home"><span>✦</span> Magic2U</a><nav aria-label="Primary navigation"><a href="#studio">Studio</a><a href="#system">System</a><a href="#about">About</a></nav><a className="header-action" href="#studio">Build your system <span aria-hidden="true">→</span></a></header>
    <main id="top">
      <section className="hero"><div className="eyebrow"><span className="pulse"/> Design system studio</div><h1>Your brand.<br/><em>Ready to build.</em></h1><p>Turn a few brand decisions into a consistent, accessible interface foundation. Preview it live and export the tokens your team can use today.</p><div className="hero-actions"><a className="button primary" href="#studio">Open the studio</a><a className="text-link" href="#system">See what you get <span>↓</span></a></div><div className="trust-row"><span>No account required</span><span>Stored on your device</span><span>Accessible color pairing</span></div></section>
      <section className="studio-section" id="studio">
        <div className="section-heading"><div><span className="kicker">Live studio</span><h2>Shape the system. See it respond.</h2></div><p>Every control updates the component canvas and exported token file immediately.</p></div>
        <div className="studio-grid"><aside className="control-panel" aria-label="Brand controls"><div className="panel-title"><span>Brand settings</span><span className="status-dot">Live</span></div>
          <label>Brand name<input value={brandName} onChange={(event) => setBrandName(event.target.value)} maxLength={40}/></label>
          <fieldset><legend>Quick starts</legend><div className="preset-grid">{presets.map((preset) => <button key={preset.name} className={primary === preset.color ? "preset active" : "preset"} onClick={() => { setBrandName(preset.name); setPrimary(preset.color); }}><i style={{ background: preset.color }}/><span>{preset.name}</span></button>)}</div></fieldset>
          <label>Primary color<div className="color-control"><input type="color" value={primary} onChange={(event) => setPrimary(event.target.value)}/><input value={primary.toUpperCase()} onChange={(event) => /^#[0-9A-Fa-f]{0,6}$/.test(event.target.value) && setPrimary(event.target.value)} aria-label="Primary color hexadecimal value"/></div></label>
          <label>Corner radius <output>{radius}px</output><input type="range" min="2" max="24" value={radius} onChange={(event) => setRadius(Number(event.target.value))}/></label>
          <fieldset><legend>Appearance</legend><div className="segmented"><button className={mode === "light" ? "active" : ""} onClick={() => setMode("light")}>☀ Light</button><button className={mode === "dark" ? "active" : ""} onClick={() => setMode("dark")}>◐ Dark</button></div></fieldset>
          <div className="control-actions"><button className="save" onClick={saveProject}>{saved ? "Saved ✓" : "Save project"}</button><button className="export" onClick={exportTokens}>Export tokens ↓</button></div>
        </aside><div className="preview-panel"><div className="preview-toolbar"><span><i/> Component canvas</span><span>{mode === "light" ? "Light" : "Dark"} mode · 100%</span></div><div className="preview-canvas"><div className="sample-nav"><strong><b>✦</b> {brandName || "Your brand"}</strong><div><span>Overview</span><span>Activity</span><button aria-label="User profile">AK</button></div></div><div className="sample-content"><div className="sample-heading"><div><small>Overview</small><h3>Good morning, Andrew.</h3><p>Here is what is happening with your workspace today.</p></div><button className="brand-button">Create report</button></div><div className="metric-grid"><article><small>Active projects</small><strong>12</strong><span className="up">↗ 8.2%</span></article><article><small>Team members</small><strong>48</strong><span>4 invited</span></article><article><small>Completion</small><strong>84%</strong><div className="progress"><i/></div></article></div><div className="activity-card"><div className="card-heading"><strong>Recent activity</strong><button>View all</button></div><div className="activity"><span className="avatar purple">MN</span><p><strong>Maya updated the launch plan</strong><small>Marketing workspace · 12 min ago</small></p><b>↗</b></div><div className="activity"><span className="avatar green">JL</span><p><strong>Jordan completed a review</strong><small>Product workspace · 38 min ago</small></p><b>✓</b></div></div></div></div><div className="a11y-strip"><span className="check">✓</span><div><strong>Accessible color pairing</strong><small>{ratio.toFixed(2)}:1 contrast with {textOnPrimary === "#ffffff" ? "white" : "dark"} text</small></div><span className={ratio >= 4.5 ? "pass" : "review"}>{ratio >= 4.5 ? "AA pass" : "Review"}</span></div></div></div>
      </section>
      <section className="system-section" id="system"><span className="kicker">One small system, ready to grow</span><h2>The foundation your product actually needs.</h2><div className="benefit-grid"><article><span>01</span><h3>Design tokens</h3><p>Portable color, spacing, radius, and appearance decisions in a clean JavaScript Object Notation file.</p></article><article><span>02</span><h3>Component patterns</h3><p>Practical buttons, inputs, navigation, cards, status indicators, and data displays.</p></article><article><span>03</span><h3>Accessibility feedback</h3><p>Automatic readable text selection and Web Content Accessibility Guidelines contrast checks.</p></article></div></section>
      <section className="closing" id="about"><div><span className="kicker">Built for the handoff</span><h2>From brand idea to developer-ready decisions.</h2></div><a className="button primary" href="#studio">Start building</a></section>
    </main><footer><a className="wordmark" href="#top"><span>✦</span> Magic2U</a><p>A focused design-system product by Andrew Kieckhefer.</p><span>Apache License 2.0</span></footer>
  </div>;
}
