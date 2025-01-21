import { getStorage, setStorage } from "../../general/storagejs.js";
// FALTA HACER QUE DIFERENCIA AGREGAR CON EDITAR 

/*
FUNCION PARA AGREGAR AL LOCALSTORAGE LOS CLIENTES
*/
export function keepCliente(idBtnAdd, idFormMain) {
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
      return
    }
    // Verificar si se editara el cliente
    if(idclient.value != "") {
      let editClient = getStorage("clients").map(prod => {
        if(prod.id == Number(idclient.value)) prod = newClient;
        return prod
      })
      setStorage("clients", editClient);
      alert("Editado correctamente");
      location.reload();
      return;
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