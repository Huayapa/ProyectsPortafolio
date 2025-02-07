import { redirectUrl } from "../general/redirect.js";
import { activeForm, activeFormInit} from "../general/ViewsInputsForm.js"
import { mostrarProdsTable } from "../products/funciones/mostrarProductos.js";
import { mostrarProdSelectStorage } from "./funciones/mostrarProductoSelect.js";
import { agregarProdBoleta } from "./funciones/agregarProdBoleta.js";
import { borrarProdBoleta } from "./funciones/borrarProdBoleta.js";
import { borrarBoleta } from "./funciones/borrarBoleta.js";
import { mostrarClientSelectStorage } from "./funciones/mostrarClientBoleta.js";
import { editarBoleta } from "./funciones/editBoleta.js";
import { mostrarPrecioTotal } from "./funciones/addTotalPrecioProd.js";
import { guardarBoleta } from "./funciones/guardarBoleta.js";


document.addEventListener("DOMContentLoaded", e => {
  // Activar Inputs, desactivar y activar cuando el producto ya este
  activeForm("newventa", ".elementVenta", "storageclient");
  borrarBoleta("borrarventa", ".elementVenta");
  activeFormInit(".elementVenta", "storageprod")
  activeFormInit(".elementVenta", "storageclient")
  // Enviar a la pagina de productos y clientes, para seleccionar
  redirectUrl("btnProduct", "./gestionproductos.html");
  redirectUrl("btn-Client", "./gestioncliente.html")
  // Mostrar los productos que se hara en la orden de venta y lo que esta seleccionado en ese momento 
  mostrarProdsTable("productos-factura", "prodsBoleta");
  mostrarProdSelectStorage(".local-storage")
  // Mostrar los clientes que se hara en la orden de venta y lo que esta seleccionado en ese momento 
  mostrarClientSelectStorage(".input-client")
  // Agregar producto a la seccion principal (boleta de pago)
  agregarProdBoleta("addTicketProd","cantidad")
  // Cancelar producto de la boleta
  borrarProdBoleta("removeProdVenta", "productos-factura")
  // Editar boleta (Productos)
  editarBoleta("editboleta", "form-venta");
  // Mostrar el precio total de los productos
  mostrarPrecioTotal("section-preciototal");
  // Guardar boleta de venta
  guardarBoleta("addventa", "form-venta");
})