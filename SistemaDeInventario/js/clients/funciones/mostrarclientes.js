import { getStorage } from "../../general/storagejs.js";

/*
FUNCION PARA MOSTRAR LOS CLIENTES POR MEDIO DE UNA TABLA
*/
export function mostrarClientsTable(idTableBody, nameStorage) {
  const $TableBody = document.getElementById(idTableBody);
  // Verificar que el nombre de clientes exista en el storage
  if(!localStorage.getItem(nameStorage)) {
    const $trnone = document.createElement("tr");
    $trnone.innerHTML = "<td colspan='6' style='text-align: center'>No hay clientes aun</td>";
    $TableBody.appendChild($trnone);
    return;
  }
  // Si existe, se mostrara
  const clients = getStorage(nameStorage);
  clients.forEach(client => {
    const $tr = document.createElement("tr");
    $tr.setAttribute("id", `${client.id}-client`);
    $tr.innerHTML = `
      <td>${client.id}</td>
      <td>${client.name}</td>
      <td>${client.dni}</td>
      <td>${client.phoneNumber}</td>
      <td>${client.address}</td>
    `;
    $TableBody.appendChild($tr);
  });
}