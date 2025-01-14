import { getStorage, setStorage } from "../../general/storagejs.js";

export function editarBoleta(btnIdForm, idMainForm) {
const $btnEdit = document.getElementById(btnIdForm);
$btnEdit.addEventListener("click", e => {
  e.preventDefault();
  if(!getStorage("tickets")) alert("No se encuentra en las boletas creadas");
  // if(getStorage("tickets").some())
  console.log(e);
  
})
}