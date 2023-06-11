class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Agrega un event listener al botón
    this.addEventListener("click", this.handleClick.bind(this));
  }

  // Define los atributos observados
  static get observedAttributes() {
    return ["button-color", "text-color", "button-size", "button-text"];
  }

  // Renderiza el componente cuando se inserta en el DOM
  connectedCallback() {
    this.render();
  }

  // Actualiza el componente cuando se modifican los atributos
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  // Maneja el evento de clic del botón
  handleClick() {
    // Dispara un evento personalizado 'custom-click'
    this.dispatchEvent(new CustomEvent("custom-click"));
  }

  // Renderiza el componente con el HTML dinámico
  render() {
    const buttonColor = this.getAttribute("button-color") || "black";
    const textColor = this.getAttribute("text-color") || "white";
    const buttonSize = this.getAttribute("button-size") || "medium";
    const buttonText = this.getAttribute("button-text") || "Click me";

    this.shadowRoot.innerHTML = `
      <style>
      button {
        background-color: transparent;
        color: ${buttonColor};
        border: 2px solid ${buttonColor};
        padding: ${buttonSize === "large" ? "20px" : "10px"};
        font-size: ${buttonSize === "large" ? "24px" : "16px"};
        border-radius: 10px;
        transition: background-color 0.3s ease;
      }
      
      button:hover {
        background-color: ${buttonColor};
        color: ${textColor};
      }
    </style>
    <button>${buttonText}</button>
  `;
  }
}

customElements.define("custom-button", CustomButton);
