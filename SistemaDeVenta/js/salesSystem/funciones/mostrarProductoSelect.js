/*
FUNCION QUE MOSTRARA EL PRODUCTO SELECCIONADO EN PAGINA DE LOS PRODUCTOS
(SE HACE USO DEL LOCALSTORAGE)
*/
export function mostrarProdSelectStorage(elementValue) {
  const $elements = document.querySelectorAll(elementValue);
  if(!localStorage.getItem("storageprod")) return;
  let storage = JSON.parse(localStorage.getItem("storageprod"))[0];
  $elements.forEach((el, indice) => {

    let valueData = ["product", "descript", "amount", "price", "stock"][indice];
    el.value = storage[valueData];

    if(el.name == "cantidad") {
      el.removeAttribute("disabled");
    }
  }); 
}