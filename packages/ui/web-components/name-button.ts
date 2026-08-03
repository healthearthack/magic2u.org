class NameButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>${this.textContent}</button>`;
  }
}

customElements.define('name-button', NameButton);

