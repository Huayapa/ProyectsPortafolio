import { btnImprimirBoleta } from "./funciones/imprimirBoleta.js";
import { mostrarBoletas } from "./funciones/mostrarBoletas.js"

document.addEventListener("DOMContentLoaded", () => {
  mostrarBoletas("productos-factura");
  btnImprimirBoleta(".btn-boleta")
})