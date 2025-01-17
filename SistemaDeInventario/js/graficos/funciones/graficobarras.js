import { getStorage, setStorage } from "../../general/storagejs.js";

export function gb_productos(idSection) {
  // Mostrar el stock de productos que nos quedan
  let listProd = ["No se encontro productos"];
  let data = ["0"];
  // LLamar a los productos
  if(getStorage("prods") != undefined && getStorage("prods")) {
    listProd = getStorage("prods").map(prod => prod.product);
    data = getStorage("prods").map(prod => prod.stock)
  }
  
  new Chart(idSection, {
    type: 'bar',
    data: {
      labels: listProd,
      datasets: [{
        label: 'Productos',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

export function gb_ventasProd(idSection) {
   // Mostrar el stock de productos que nos quedan
   let listProd = ["Sin productos"];
   let data = ["0"];
   // LLamar a los productos
  if(getStorage("boletas") != undefined && getStorage("boletas")) {
    // Ordenar los productos comprados
    const productosUnicos = [
      ...new Set(
        getStorage("boletas").flatMap(venta => venta.datalistprods.map(prod => prod.product))
      ),
    ];
    const precioPorProducto = [
      ...new Set(
        getStorage("boletas").flatMap(venta => venta.datalistprods.map(prod => Number(prod.price) * Number(prod.amount)))
      ),
    ];
    console.log(productosUnicos);
    
    listProd = productosUnicos;
    data = precioPorProducto
  }
  new Chart(idSection, {
    type: 'bar',
    data: {
      labels: listProd,
      datasets: [{
        label: 'Dinero',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                  return 'S/' + value;
              }
          }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });
}