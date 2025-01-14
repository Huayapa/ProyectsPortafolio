import { getStorage, setStorage } from "../../general/storagejs.js";

export function agregarclienteVenta(tablaThebody, locationhref) {
  const $mainRegist = document.getElementById(tablaThebody),
  $rowstable = $mainRegist.querySelectorAll("tr");

  $rowstable.forEach(el => {
    el.addEventListener("click", e => {
    if($mainRegist.classList.contains("edit-active")) return;
    let valueId = el.getAttribute("id");
    if(valueId === null) {
      console.error("Este registro no tienen un identificador");
      return;
    }
    // Guardar el client que se cargara
    const id = valueId.split("-")[0];
    let dataClient = getStorage("clients").filter(prod => prod.id == id);
    setStorage("storageclient", dataClient)
    location.href = locationhref;
  })
})
}