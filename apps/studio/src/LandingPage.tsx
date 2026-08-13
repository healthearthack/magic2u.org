import { useEffect, useMemo, useState } from "react";
import { compileCss, contrast, createTokens, readableText, type Mode, type SystemConfig, type Target } from "./tokenEngine";
import "./app.css";

const presets = [
  { name: "Magic2U", primary: "#6d4aff", accent: "#20a67a" },
  { name: "Northstar", primary: "#006b5f", accent: "#e9a23b" },
  { name: "Orbit", primary: "#0f5bd8", accent: "#8b5cf6" },
  { name: "Ember", primary: "#a63a17", accent: "#f3b13f" },
];
const targets: Array<{ id: Target; label: string; detail: string }> = [
  { id: "web", label: "Web product", detail: "CSS variables and interface tokens" },
  { id: "mobile", label: "Mobile app", detail: "Platform-neutral semantic values" },
  { id: "print", label: "Print & merchandise", detail: "Production color and spatial specs" },
  { id: "campaign", label: "Campaign", detail: "Reusable marketing art direction" },
];

function download(name: string, content: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a"); link.href = url; link.download = name; link.click(); URL.revokeObjectURL(url);
}

export default function LandingPage() {
  const [config, setConfig] = useState<SystemConfig>({ brandName: "Magic2U", primary: "#6d4aff", accent: "#20a67a", radius: 14, spacing: 8, fontFamily: "Inter, system-ui, sans-serif", mode: "light", target: "web" });
  const [saved, setSaved] = useState(false);
  const [format, setFormat] = useState<"json" | "css">("json");
  const [view, setView] = useState<"product" | "tokens">("product");
  const patch = (next: Partial<SystemConfig>) => setConfig((current) => ({ ...current, ...next }));

  useEffect(() => {
    const stored = localStorage.getItem("magic2u-system");
    if (stored) try { setConfig((current) => ({ ...current, ...JSON.parse(stored) })); } catch { localStorage.removeItem("magic2u-system"); }
  }, []);

  const tokens = useMemo(() => createTokens(config), [config]);
  const output = format === "json" ? JSON.stringify(tokens, null, 2) : compileCss(config);
  const onPrimary = readableText(config.primary);
  const ratio = contrast(config.primary, onPrimary);
  const slug = config.brandName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "brand";

  function save() { localStorage.setItem("magic2u-system", JSON.stringify(config)); setSaved(true); setTimeout(() => setSaved(false), 1600); }
  function exportFile() { download(`${slug}-tokens.${format}`, output, format === "json" ? "application/json" : "text/css"); }

  return <div className={`product-shell mode-${config.mode}`} style={{ "--brand": config.primary, "--accent": config.accent, "--on-brand": onPrimary, "--radius": `${config.radius}px`, "--space": `${config.spacing}px`, "--brand-font": config.fontFamily } as React.CSSProperties}>
    <header className="topbar"><a className="wordmark" href="#top"><span>✦</span> Magic2U</a><nav><a href="#studio">Build</a><a href="#architecture">Tokens</a><a href="#adopt">Adopt</a><a href="#plans">Plans</a></nav><a className="header-action" href="#studio">Create a system →</a></header>
    <main id="top">
      <section className="hero"><div className="eyebrow"><span className="pulse"/> Design system as a service</div><h1>One brand system.<br/><em>Every output.</em></h1><p>Define the decisions once. Magic2U turns them into accessible interface tokens, product previews, developer assets, and production-ready specifications.</p><div className="hero-actions"><a className="button primary" href="#studio">Build your system</a><a className="text-link" href="#architecture">Explore the architecture ↓</a></div><div className="trust-row"><span>Open token format</span><span>Real contrast calculation</span><span>Web, mobile, print & campaigns</span></div></section>

      <section className="journey"><div><b>01</b><span>Define</span><small>Brand foundations</small></div><i>→</i><div><b>02</b><span>Validate</span><small>Accessibility and rules</small></div><i>→</i><div><b>03</b><span>Compile</span><small>Semantic tokens</small></div><i>→</i><div><b>04</b><span>Adopt</span><small>Production outputs</small></div></section>

      <section className="studio-section" id="studio"><div className="section-heading"><div><span className="kicker">System builder</span><h2>Start fast. Go as deep as you need.</h2></div><p>The quick-play studio now feeds a complete token architecture instead of exporting a shallow theme file.</p></div>
        <div className="studio-grid"><aside className="control-panel"><div className="panel-title"><span>Foundation</span><span className="status-dot">Live</span></div>
          <label>System name<input value={config.brandName} onChange={(e) => patch({ brandName: e.target.value })}/></label>
          <fieldset><legend>Starting point</legend><div className="preset-grid">{presets.map((p) => <button key={p.name} className={config.primary === p.primary ? "preset active" : "preset"} onClick={() => patch(p)}><i style={{background:p.primary}}/><span>{p.name}</span></button>)}</div></fieldset>
          <div className="split"><label>Primary<input type="color" value={config.primary} onChange={(e) => patch({primary:e.target.value})}/><code>{config.primary}</code></label><label>Accent<input type="color" value={config.accent} onChange={(e) => patch({accent:e.target.value})}/><code>{config.accent}</code></label></div>
          <label>Corner radius <output>{config.radius}px</output><input type="range" min="0" max="28" value={config.radius} onChange={(e) => patch({radius:Number(e.target.value)})}/></label>
          <label>Spacing base <output>{config.spacing}px</output><input type="range" min="4" max="12" value={config.spacing} onChange={(e) => patch({spacing:Number(e.target.value)})}/></label>
          <label>Type family<select value={config.fontFamily} onChange={(e) => patch({fontFamily:e.target.value})}><option>Inter, system-ui, sans-serif</option><option>Georgia, serif</option><option>ui-monospace, monospace</option></select></label>
          <fieldset><legend>Appearance</legend><div className="segmented three">{(["light","dark","high-contrast"] as Mode[]).map((m)=><button key={m} className={config.mode===m?"active":""} onClick={()=>patch({mode:m})}>{m === "high-contrast" ? "Contrast" : m}</button>)}</div></fieldset>
          <div className="control-actions"><button className="save" onClick={save}>{saved?"Saved ✓":"Save locally"}</button><button className="export" onClick={exportFile}>Export {format.toUpperCase()} ↓</button></div>
        </aside>
        <div className="workspace"><div className="workspace-tabs"><button className={view==="product"?"active":""} onClick={()=>setView("product")}>Product preview</button><button className={view==="tokens"?"active":""} onClick={()=>setView("tokens")}>Token output</button><span>{config.target}</span></div>
          {view === "product" ? <div className="preview-wrap"><div className="preview-canvas"><div className="sample-nav"><strong><b>✦</b> {config.brandName||"Your system"}</strong><div><span>Overview</span><span>Activity</span><button>AK</button></div></div><div className="sample-content"><div className="sample-heading"><div><small>Workspace</small><h3>Design decisions, aligned.</h3><p>One semantic foundation across every customer touchpoint.</p></div><button className="brand-button">Create report</button></div><div className="metric-grid"><article><small>Token coverage</small><strong>94%</strong><span className="up">↗ Healthy</span></article><article><small>Components</small><strong>28</strong><span>6 patterns</span></article><article><small>Adoption</small><strong>3 / 4</strong><div className="progress"><i/></div></article></div><div className="activity-card"><div className="card-heading"><strong>System activity</strong><button>View registry</button></div><div className="activity"><span className="avatar purple">TK</span><p><strong>Semantic color set compiled</strong><small>Foundation · just now</small></p><b>✓</b></div><div className="activity"><span className="avatar green">AA</span><p><strong>Primary pairing validated</strong><small>Accessibility · {ratio.toFixed(2)}:1</small></p><b>✓</b></div></div></div></div><div className="a11y-strip"><span className="check">✓</span><div><strong>Measured accessibility</strong><small>{ratio.toFixed(2)}:1 with {onPrimary==="#ffffff"?"white":"dark"} text</small></div><span className={ratio>=4.5?"pass":"review"}>{ratio>=4.5?"AA pass":"Review"}</span></div></div> : <div className="token-console"><div className="console-head"><div className="segmented"><button className={format==="json"?"active":""} onClick={()=>setFormat("json")}>JSON</button><button className={format==="css"?"active":""} onClick={()=>setFormat("css")}>CSS</button></div><button onClick={()=>navigator.clipboard.writeText(output)}>Copy</button></div><pre>{output}</pre></div>}
        </div></div>
        <div className="target-picker"><div><span className="kicker">Output target</span><h3>Where will this system work?</h3></div>{targets.map((t)=><button key={t.id} className={config.target===t.id?"active":""} onClick={()=>patch({target:t.id})}><b>{t.label}</b><small>{t.detail}</small></button>)}</div>
      </section>

      <section className="architecture" id="architecture"><div className="section-heading"><div><span className="kicker">Token architecture</span><h2>From raw values to business outcomes.</h2></div><p>A usable system separates what a value is from why the product uses it.</p></div><div className="layer-grid"><article><span>01 · Foundation</span><h3>Raw decisions</h3><p>Brand colors, type families, spacing increments, radii, motion, and elevation.</p><code>#6d4aff · 8px · Inter</code></article><article><span>02 · Semantic</span><h3>Purposeful roles</h3><p>Primary action, content on primary, subtle surface, focus ring, and danger state.</p><code>color.action.primary</code></article><article><span>03 · Component</span><h3>Applied contracts</h3><p>Buttons, inputs, navigation, cards, data displays, and campaign modules.</p><code>button.primary.background</code></article><article><span>04 · Output</span><h3>Adoption assets</h3><p>JavaScript Object Notation, Cascading Style Sheets, product specs, and implementation guidance.</p><code>tokens.json · tokens.css</code></article></div></section>

      <section className="adopt" id="adopt"><div className="section-heading"><div><span className="kicker">Adoption path</span><h2>A system teams can actually put to work.</h2></div><p>The archive's deeper governance model becomes a clear operating experience.</p></div><div className="adopt-grid"><article><b>Week 1</b><h3>Discover</h3><p>Inventory brand decisions and prioritize the product surfaces that create the most inconsistency.</p><ul><li>Brand parity audit</li><li>Accessibility baseline</li><li>Adoption target</li></ul></article><article><b>Week 2</b><h3>Define</h3><p>Approve foundation and semantic tokens with named owners and documented exceptions.</p><ul><li>Token registry</li><li>Governance rules</li><li>Change ownership</li></ul></article><article><b>Week 3</b><h3>Deploy</h3><p>Connect real components and outputs, then measure coverage instead of counting files.</p><ul><li>Reference implementation</li><li>Developer handoff</li><li>Adoption scorecard</li></ul></article></div></section>

      <section className="plans" id="plans"><div className="section-heading"><div><span className="kicker">Business model</span><h2>Free to start. Valuable when teams adopt.</h2></div><p>The Studio earns attention; implementation, governance, and managed distribution create the business.</p></div><div className="plan-grid"><article><span>Self-serve</span><h3>Studio</h3><strong>Free</strong><p>Build and export one local system without an account.</p><ul><li>Live configuration</li><li>Accessibility feedback</li><li>JSON and CSS export</li></ul><a href="#studio">Start now</a></article><article className="featured"><span>For product teams</span><h3>Team system</h3><strong>Consultative</strong><p>Turn approved decisions into a maintained component and token workflow.</p><ul><li>Multi-brand architecture</li><li>Repository integration</li><li>Adoption documentation</li></ul><a href="mailto:Magic2UDesignSystems@gmail.com?subject=Magic2U%20Team%20System">Discuss a team system</a></article><article><span>For organizations</span><h3>Managed platform</h3><strong>Custom</strong><p>Govern multiple teams, channels, and production outputs from one source.</p><ul><li>Governance and audit</li><li>Managed releases</li><li>Custom output compilers</li></ul><a href="mailto:Magic2UDesignSystems@gmail.com?subject=Magic2U%20Managed%20Platform">Talk about adoption</a></article></div></section>
    </main><footer><a className="wordmark" href="#top"><span>✦</span> Magic2U</a><p>One design-system product by Andrew Kieckhefer.</p><span>Apache License 2.0</span></footer>
  </div>;
}
