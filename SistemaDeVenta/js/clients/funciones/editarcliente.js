import { getStorage } from "../../general/storagejs.js";

/*
FUNCION PARA ACTIVAR LA ACCION DE EDICION DE LOS CLIENTES
CUANDO SE HAGA CLIC A UNA TABLA SE BUSCARA EN EL LOCASTORAGE POR SU ID
*/
export function editarClient(btnEditId, tableMainClient, idform) {
  const $btnEdit = document.getElementById(btnEditId),
    $formMain = document.getElementById(idform);
  
  $btnEdit.addEventListener("click", e => {
    e.preventDefault();
    if($btnEdit.textContent == "Cancelar") {
      location.reload()
    }
    // Poner modo edicion
    const $body = document.querySelector("body"),
    $tablebody = document.getElementById(tableMainClient);
    $body.style.cursor = "pointer";
    $btnEdit.style.opacity = "0.7";
    $btnEdit.style.backgroundColor = "darkred";
    $btnEdit.style.color = "white";
    $btnEdit.textContent = "Cancelar";
    $tablebody.style = "background-color: yellow";
    $tablebody.classList.add("edit-active")
    // Evento para detectar la fila de clientes
    const $trId = $tablebody.querySelectorAll("tr");
    $trId.forEach($tr => {
      $tr.addEventListener("click", e => {
        if(!$tr.id) return;
        // Obtener id
        const id = Number($tr.id.split("-")[0]);
        // Verificar que existan los clientes
        if(!localStorage.getItem("clients")) {
          alert("No se encontro la lista de clientes");
          location.reload();
        }
        // Mostrar los datos en el formulario
        const getclient = getStorage("clients").filter(client => client.id == id)[0];
        const {idclient, nameComplete, dni, phoneNumber, address} = $formMain;
        idclient.value = getclient.id;
        nameComplete.value = getclient.name;
        dni.value = getclient.dni;
        phoneNumber.value = getclient.phoneNumber;
        address.value = getclient.address;
        // Habilitar formulario
        nameComplete.removeAttribute("disabled");
        dni.removeAttribute("disabled");
        phoneNumber.removeAttribute("disabled");
        address.removeAttribute("disabled");
      })
    })
  });
}