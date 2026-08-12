export default function CloudStatus() {
  const buildTime = new Date().toLocaleString();

  return (
    <div className="cloud-status">
      <span>☁️ Magic2U Cloud</span>
      <span>Auto‑Deployed from GitHub</span>
      <span>Last Build: {buildTime}</span>
    </div>
  );
}
