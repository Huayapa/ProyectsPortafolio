import { mostrarPrecio } from "../../general/mostrarPrecio.js";
import { getStorage, setStorage } from "../../general/storagejs.js";

export function guardarBoleta(btnAddId, formId) {
  const $formMain = document.getElementById(formId),
    $btnAdd = document.getElementById(btnAddId);
  /*
  ##### Del formulario solo obtendremos:
  - Nombre del vendedor
  - Fecha de la boleta
  ##### Del localStorage obtendremos
  - Lista de productos a comprar
  - Datos del cliente
  ##### Funcion
  - Sacaremos el total de los productos
  */
  $btnAdd.addEventListener("click", e => {
    e.preventDefault()
    const {vendedor, fecha} = $formMain;
    // Verificar los datos del vendedor
    if(vendedor.value == "" || fecha.value == "") return;
    // Verificar la lista los productos y el cliente
    if(!getStorage("prodsBoleta") || !getStorage("storageclient")) return;
    // Verificar que el precio es correcto
    const precioTotal = mostrarPrecio();
    if(precioTotal <= 0) return alert("Ocurrio un problema con el precio total");
    // Obtener los datos del localstorage
    const clientData = getStorage("storageclient")[0];
    const prodsBoleta = getStorage("prodsBoleta");
    // Crear la nueva boleta
    let newBoleta = {
      id: 1,
      namevendedor: vendedor.value,
      fechaventa: fecha.value,
      totalprecio: precioTotal,
      dataclient: clientData,
      datalistprods: prodsBoleta
    }
    // Verificar si la boleta ya existe
    if(!getStorage("boletas")) {
      setStorage("boletas", [newBoleta]);
    } else {
      // Ya que si existe, añadiremos uno nuevo
      let newid = 1;
      let boletas = getStorage("boletas");
      boletas.forEach(boleta => {
        if(boleta.id == newid) {
          newid++;
        }
      });
      newBoleta.id = newid;
      boletas.push(newBoleta)
      setStorage("boletas", boletas);
    }
    // Limpiar el nombre de la boleta, los productos y el producto seleccionado
    localStorage.removeItem("storageclient");
    localStorage.removeItem("storageprod");
    localStorage.removeItem("prodsBoleta");
    alert("Boleta generada")
    location.reload();
  })
}