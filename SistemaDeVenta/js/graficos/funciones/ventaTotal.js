import { getStorage } from "../../general/storagejs.js";

export function mostrarVentaTotal(idSection) {
  const $content = document.getElementById(idSection);
  // Sacara las ventas totales
  if(!getStorage("boletas")) {
    $content.textContent = "S/ 0";
  }
  let boletasprecio = getStorage("boletas").map(boleta => boleta.totalprecio);
  let preciototal = 0;
  boletasprecio.forEach(preciot => {
    preciototal += preciot
  });
  $content.textContent = `S/${preciototal}`
  
}