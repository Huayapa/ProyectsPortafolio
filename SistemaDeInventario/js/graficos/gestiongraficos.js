import { gb_productos, gb_ventasProd } from "./funciones/graficobarras.js"
import { mostrarVentaTotal } from "./funciones/ventaTotal.js"

document.addEventListener("DOMContentLoaded", e => {
  gb_productos("productosComprados")
  gb_ventasProd("ventaProd")
  mostrarVentaTotal("ventaTotal")
})