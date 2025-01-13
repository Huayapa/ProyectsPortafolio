import { getStorage, setStorage } from "../../general/storagejs.js";

/*
FUNCION PARA AGREGAR AL LOCALSTORAGE LOS CLIENTES
*/
export function agregarCliente(idBtnAdd, idFormMain) {
  // Definir valores
  const $btnAdd = document.getElementById(idBtnAdd),
    $FormMain = document.getElementById(idFormMain);
  const {idclient, nameComplete, dni, phoneNumber, address} = $FormMain;
  // Detectar clic
  $btnAdd.addEventListener("click", e => {
    e.preventDefault();
    // Verificar que los valores no esten vacios
    if([nameComplete, dni, phoneNumber, address].some(input => input.value == "")) return;
    // Crear objeto
    let newClient = {
      id: idclient.value != "" ? idclient.value : 1,
      name: nameComplete.value,
      dni: dni.value,
      phoneNumber: phoneNumber.value,
      address: address.value
    }
    // Guardar en el localstorage si no existe
    if(!localStorage.getItem("clients")) {
      setStorage("clients", [newClient]);
      location.reload();
    }
    // Si existe, actualizaremos el valor
    let totalClients = getStorage("clients");
    totalClients.forEach(client => {
      if(client.id == newClient.id) {
        newClient.id++;
      }
    });
    totalClients.push(newClient);
    setStorage("clients", totalClients);
    alert("Agregado Correctamete")
    location.reload();
  });
}