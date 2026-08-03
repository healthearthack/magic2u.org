fetch("data/stats.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("stats");

    Object.entries(data).forEach(([key, value]) => {
      const div = document.createElement("div");
      div.className = "stat";
      div.innerHTML = `<strong>${key}</strong>: ${value.toLocaleString()}`;
      container.appendChild(div);
    });
  });
