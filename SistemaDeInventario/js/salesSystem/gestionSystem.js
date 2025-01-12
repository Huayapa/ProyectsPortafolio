import { redirectUrl } from "../general/redirect.js";
import { activeForm, activeFormInit} from "../general/ViewsInputsForm.js"
import { mostrarProdsTable } from "../products/funciones/mostrarProductos.js";
import { mostrarProdSelectStorage } from "./funciones/mostrarProductoSelect.js";
import { agregarProdBoleta } from "./funciones/agregarProdBoleta.js";
import { borrarProdBoleta } from "./funciones/borrarProdBoleta.js";
import { borrarBoleta } from "./funciones/borrarBoleta.js";
// import { addProductListNotFormClick } from "../addProductList.js";
// import { recuperarData } from "../getdataStorage.js";
// import { mostrarProdsTable } from "../mostrarProducts.js";
// import { redirectUrl } from "../redirect.js";
// import { clickCancelProd } from "../removeProductList.js";

document.addEventListener("DOMContentLoaded", e => {
  // Activar Inputs, desactivar y activar cuando el producto ya este
  activeForm("newventa", ".elementVenta");
  borrarBoleta("borrarventa", ".elementVenta");
  activeFormInit(".elementVenta", "storageprod")
  // Enviar a la pagina de productos, para seleccionar
  redirectUrl("btnProduct", "./gestionproductos.html");
  // Mostrar los productos que se hara en la orden de venta y lo que esta seleccionado en ese momento 
  mostrarProdsTable("productos-factura", "prodsBoleta");
  mostrarProdSelectStorage(".local-storage")
  // Agregar producto a la seccion principal (boleta de pago)
  agregarProdBoleta("addTicketProd","cantidad")
  // Cancelar producto de la boleta
  borrarProdBoleta("removeProdVenta", "productos-factura")
  // addProductListNotFormClick("addTicketProd","cantidad", "prodsBoleta");
  // recuperarData("storageprod", ".local-storage", ["product", "descript", "amount", "price", "stock"]);
  // clickCancelProd("removeProdVenta", "productos-factura", "prodsBoleta");
})