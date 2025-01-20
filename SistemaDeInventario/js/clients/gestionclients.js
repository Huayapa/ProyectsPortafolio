import { activeForm, borrarVenta } from "../general/ViewsInputsForm.js"
import { agregarclienteVenta } from "./funciones/agregarclienteventa.js";
import { editarClient } from "./funciones/editarcliente.js";
import { keepCliente } from "./funciones/guardarcliente.js";
import { mostrarClientsTable } from "./funciones/mostrarclientes.js";

document.addEventListener("DOMContentLoaded", e => {
  // Habilitar y desabilitar inputs de formulario
  activeForm("newclient", ".input", undefined);
  borrarVenta("deleteclient", ".input");
  // Agregar Cliente
  keepCliente("addclient", "form-client")
  // Mostrar los clientes en la tabla
  mostrarClientsTable("tables-data-clients", "clients");
  // Editar cliente ya existente
  editarClient("editclient", "tables-data-clients", "form-client")
  // Enviar el cliente a los datos de la venta
  agregarclienteVenta("tables-data-clients", "./index.html")
})