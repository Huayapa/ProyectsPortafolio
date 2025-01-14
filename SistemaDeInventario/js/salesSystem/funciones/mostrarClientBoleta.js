import { getStorage} from "../../general/storagejs.js";

/*
FUNCION QUE MOSTRARA EL Cliente SELECCIONADO EN PAGINA DE LOS CLIENTES
(SE HACE USO DEL LOCALSTORAGE)
*/
export function mostrarClientSelectStorage(elementValue) {
  const $elements = document.querySelectorAll(elementValue);
  if(!getStorage("storageclient")) return;
  let storage = getStorage("storageclient")[0];
  $elements.forEach((el, indice) => {
    let valueData = ["id","name", "dni", "phoneNumber", "address"][indice];
    el.value = storage[valueData];
    el.setAttribute("disabled", "")
  });
}
