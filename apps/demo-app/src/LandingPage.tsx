import React, { useState } from "react"
import "./app.css"
import CloudStatus from "./CloudStatus"

export default function LandingPage() {
  
  const [theme, setTheme] = useState("light"); 
  const [brand, setBrand] = useState("default"); 
  
  return (
  <div className={`landing-root theme-${theme} brand-${brand}`}>
    <header className="landing-header">
      <div className="logo">✨ Magic2U Cloud</div>
      <nav>
        <a href="#features">Features</a>
        <a href="#whitelabel">White‑Label</a>
        <a href="#pricing">Pricing</a>
        <a href="#sales">Sales</a>
      </nav>
      <a className="cta-button" href="mailto:Magic2UDesignSystems@gmail.com">
        Contact Sales
      </a>
    </header>

    <section className="landing-hero">
      <h1 className="hero-title">Design Systems with Real Magic💨</h1>
      <p>
        Magic2U Cloud is a hosted, white‑label design system platform that lets teams adopt,
        customize, and deploy enterprise‑grade UI foundations in minutes—not months.
      </p>

      <div className="hero-buttons">
        <a className="cta-primary" href="#demo">View Live Demo</a>
        <a className="cta-secondary" href="mailto:Magic2UDesignSystems@gmail.com">
          Talk to Sales
        </a>
      </div>
    </section>

    <section id="demo" className="landing-section">
      <h2>Live Demo</h2>
      <p className="center">
        Explore how Magic2U Cloud instantly transforms into any brand using tokens,
        themes, and white‑label configuration.
      </p>

      <div className="demo-controls">
        <h3>Theme</h3>
        <p className="demo-explainer">
          A <strong>theme</strong> controls the overall look and feel of an interface — things like
          background color, text color, and contrast.
        </p>
        <div className="demo-buttons">
          <button onClick={() => setTheme("light")}>Light</button>
          <button onClick={() => setTheme("dark")}>Dark</button>
          <button onClick={() => setTheme("high-contrast")}>High Contrast</button>
        </div>

        <h3>Brand</h3>
        <p className="demo-explainer">
          A <strong>brand</strong> defines the identity of a company — its colors, personality, and
          visual style.
        </p>
        <div className="demo-buttons">
          <button onClick={() => setBrand("united")}>UnitedHealthcare</button>
          <button onClick={() => setBrand("default")}>Your Brand Here</button>
          <button onClick={() => setBrand("custom")}>Custom</button>
        </div>

        <h3>Color Palettes</h3>
        <div className="demo-buttons">
          <button onClick={() => setBrand("health")}>Health Insurance</button>
          <button onClick={() => setBrand("space")}>Free Space</button>
          <button onClick={() => setBrand("custom")}>Custom</button>
        </div>
      </div>

      <div className="demo-gallery">
        <h3>Components</h3>
        <button className="demo-button">Primary Button</button>
        <input className="demo-input" placeholder="Input field" />
        <div className="demo-card">Card Component</div>
      </div>
    </section>

    <section id="features" className="landing-section">
      <h2>Why Magic2U Cloud</h2>
      <div className="feature-grid">
        <Feature title="Hosted in the Cloud" description="Access your design system anywhere." />
        <Feature title="White‑Label Ready" description="Brand it for any client." />
        <Feature title="Enterprise‑Grade" description="Accessibility, tokens, themes, telemetry." />
        <Feature title="Developer‑Friendly" description="Install via npm or embed via CDN." />
      </div>
    </section>

    <section id="whitelabel" className="landing-section alt">
      <h2>White‑Label Example</h2>
      <p className="center">
        Below is a preview of how Magic2U Cloud can instantly transform into a branded design system.
      </p>

      <div className="white-label-demo">
        <div className="brand-card">
          <h3>UnitedHealthcare Design System</h3>
          <p>Powered by Magic2U Cloud</p>
        </div>

        <div className="brand-card white">
          <h3>Your Brand Here</h3>
          <p>Fully customizable. Fully yours.</p>
        </div>
      </div>
    </section>

    <section id="sales" className="landing-section alt center">
      <h2>Talk to Sales</h2>
      <p>Want a custom demo or enterprise pricing? Email us anytime:</p>
      <a className="cta-primary" href="mailto:Magic2UDesignSystems@gmail.com">
        Magic2UDesignSystems@gmail.com
      </a>
    </section>

    <footer className="landing-footer">
      <div className="footer-top">
        <span>© {new Date().getFullYear()} Magic2U Cloud Design System</span>
        <span>Apache‑2.0 Licensed · Patent Pending</span>
      </div>

      <CloudStatus />

      <div className="footer-bottom">
        <a href="mailto:Magic2UDesignSystems@gmail.com">
          Magic2UDesignSystems@gmail.com
        </a>
      </div>
    </footer>
  </div>
  )
}

function Feature({ title, description }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function PricingCard({ title, price, description }) {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p>{description}</p>
    </div>
  )
}

