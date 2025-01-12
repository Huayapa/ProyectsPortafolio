/*
FUNCION PARA MOSTRAR LOS PRODUCTOS POR MEDIO DE UNA TABLA
*/
export function mostrarProdsTable(idTableBody, nameStorage) {
  const $TableBody = document.getElementById(idTableBody);
  // Verificar que el nombre de productos exista en el storage
  if(!window.localStorage.getItem(nameStorage)) {
    const $trnone = document.createElement("tr");
    $trnone.innerHTML = "<td colspan='6' style='text-align: center'>No existen productos</td>";
    $TableBody.appendChild($trnone);
    return;
  }
  // Si existe, se mostrara
  const products = JSON.parse(localStorage.getItem(nameStorage));
  products.forEach(prod => {
    const $tr = document.createElement("tr");
    $tr.setAttribute("id", `${prod.id}-prod`);
    $tr.innerHTML = `
      <td>${prod.id}</td>
      <td>${prod.product}</td>
      <td>${prod.descript}</td>
      <td class="amount-row">${prod.amount}</td> 
      <td>${prod.price}</td>
      <td class="stock-row">${prod.stock}</td>
    `;
    $TableBody.appendChild($tr);
  });
}