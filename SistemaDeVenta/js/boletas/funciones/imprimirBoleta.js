import { generarBoleta } from "../../general/generarBoleta.js";

export function btnImprimirBoleta(btnsClass) {
  const $btns = document.querySelectorAll(btnsClass);
  for (const $btn of $btns) {
    $btn.addEventListener("click", () => {
      const isPrintBoleta = confirm("Desea imprimir la boleta?");
      if(isPrintBoleta) generarBoleta($btn.dataset.id);
    })
  }
}