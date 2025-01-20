import { getStorage } from "./storagejs.js";

export function mostrarPrecio() {
  let totalPay = 0;
  if(!getStorage("prodsBoleta")) return
  getStorage("prodsBoleta").forEach(prod => {
    totalPay += Number(prod.price) * Number(prod.amount)
  });
  return totalPay;
}