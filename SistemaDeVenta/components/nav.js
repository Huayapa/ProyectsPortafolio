
class nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderizadoHTML();
  }

  renderizadoHTML() {
    this.innerHTML = `
    <header>
      <h2>Sistema de venta</h2>
      <nav>
        <ul>
          <li><a href="./index.html">Inicio</a></li>
          <li>
          <details>
          <summary>Sistema</summary>
          <div>
          <a href="./graficos.html">Graficos</a>
          <a href="./mostrarboletas.html">Boletas</a>
          </div>
          </details>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

window.customElements.define("nav-custom", nav);