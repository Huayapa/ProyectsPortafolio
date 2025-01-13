import { activeForm, borrarVenta } from "../general/ViewsInputsForm.js"
import { agregarCliente } from "./funciones/agregarcliente.js";
import { mostrarClientsTable } from "./funciones/mostrarclientes.js";

document.addEventListener("DOMContentLoaded", e => {
  // Habilitar y desabilitar inputs de formulario
  activeForm("newclient", ".input");
  borrarVenta("deleteclient", ".input");
  // Agregar Cliente
  agregarCliente("addclient", "form-client");
  // Mostrar los clientes en la tabla
  mostrarClientsTable("tables-data-clients", "clients");
  // Editar cliente ya existente
})