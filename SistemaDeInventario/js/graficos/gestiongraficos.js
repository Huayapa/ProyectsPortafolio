import { gb_productos, gb_ventasProd } from "./funciones/graficobarras.js"
import { ga_prodventas } from "./funciones/graficosaxes.js"
import { resetStorage } from "./funciones/resetearTodo.js"
import { mostrarVentaTotal } from "./funciones/ventaTotal.js"

document.addEventListener("DOMContentLoaded", e => {
  gb_productos("productosComprados")
  gb_ventasProd("ventaProd")
  mostrarVentaTotal("ventaTotal")
  // FALTA HACER EL GRAFICO  DE VENTA POR FECHA
  ga_prodventas("contentventafecha", "optionVentaFecha")
  // Borrar todo
  resetStorage("btnreset");
})