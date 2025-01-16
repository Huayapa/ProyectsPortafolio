import { getStorage } from "../../general/storagejs.js";

export function mostrarBoletas(tbodytableid) {
  const $tbody = document.getElementById(tbodytableid);
  if(!getStorage("boletas")) {
    const $tr = document.createElement("tr");
    $tr.innerHTML = "<td colspan='6' style='text-align: center'>No existen productos</td>";
    $tbody.appendChild($tr);
    return;
  }
  const boletas = getStorage("boletas");
  boletas.forEach(boleta => {
    const $tr = document.createElement("tr");
    $tr.innerHTML = `
    <td>${boleta.id}</td>
    <td>${boleta.namevendedor}</td>
    <td>${boleta.fechaventa}</td>
    <td class="table-content">${tableClient(boleta.dataclient)}</td>
    <td class="table-content">${tableProducts(boleta.datalistprods)}</td>
    <td>S/${boleta.totalprecio}</td>
    `;
    $tbody.appendChild($tr);
  });
}

function tableClient(dataclient) {
  return `
  <table class="table-clients">
  <thead>
    <tr>
      <th>Id</th>
      <th>Nombre Completo</th>
      <th>DNI</th>
      <th>Telefono</th>
      <th>Dirección</th>
    </tr>
    </thead>
    <tbody id="productos-factura">
      <tr>
        <td>${dataclient.id}</td>
        <td>${dataclient.name}</td>
        <td>${dataclient.dni}</td>
        <td>${dataclient.phoneNumber}</td>
        <td>${dataclient.address}</td>
      </tr>
    </tbody>
    
  </table>
  `
}
function tableProducts(dataproducts) {
  const productos = dataproducts;
  let viewproductos = "";
  productos.forEach(prod => {
    viewproductos += `
      <tr>
        <td>${prod.id}</td>
        <td>${prod.product}</td>
        <td>${prod.descript}</td>
        <td>${prod.amount}</td>
        <td>S/${prod.price}</td>
      </tr>
    `;
  })
  return `
  <table class="table-products">
    <thead>
      <tr >
        <th>Id</th>
        <th>Productos</th>
        <th>Descripcion</th>
        <th>Cantidad</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody id="tables-data-prods">
      ${viewproductos}
    </tbody>
  </table>
  `
}