import { mostrarPrecio } from "../../general/mostrarPrecio.js";


export function mostrarPrecioTotal(idbox) {
  const $boxSection = document.getElementById(idbox);
  let precioTotal = mostrarPrecio();
  if(precioTotal != undefined) {
    $boxSection.innerHTML = `S/ ${precioTotal}`;
  } else {
    $boxSection.innerHTML = `S/ 0`;
  }
}