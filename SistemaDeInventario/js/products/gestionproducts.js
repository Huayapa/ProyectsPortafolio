import { activeForm, borrarVenta } from "../general/ViewsInputsForm.js"
import { mostrarProdsTable } from "../products/funciones/mostrarProductos.js";
import {keepProdStorage} from "../products/funciones/guardarProducto.js"
import { editarProductos } from "../products/funciones/editarProducto.js";
import { agregarAVenta } from "./funciones/agregarProdVenta.js";

document.addEventListener("DOMContentLoaded", () => {
  // Mostrar los productos creados
  mostrarProdsTable("tables-data-prods", "prods");
  // Activar Inputs y desactivar
  activeForm("newprod", ".elementInput");
  borrarVenta("deleteprod", ".elementInput");
  // Guardar Producto en la lista general de productos
  keepProdStorage("addprod", "form-product");
  // Editar productos
  editarProductos("editprod", "tables-data-prods", "form-product", ".elementInput");
  // Agregar producto seleccionado a la seccion de ventas
  agregarAVenta("tables-data-prods", "./index.html")
})
