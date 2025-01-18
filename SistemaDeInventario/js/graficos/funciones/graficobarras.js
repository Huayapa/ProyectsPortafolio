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
        label: 'Stock',
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
    // Traer los productos de cada boleta (el producto y el precio total)
    const resultadoprods = getStorage("boletas").reduce((acumulado, boleta) => {
      boleta.datalistprods.forEach(prod => {
        const key = prod.product;
        const precioTotal = Number(prod.amount) * Number(prod.price);
        
        // Sumando el acumulador (si el valor no existe tomara 0 para sumarlo)
        acumulado[key] = (acumulado[key] || 0) + precioTotal;
      });
      return acumulado;
    }, {});
    
    listProd = Object.keys(resultadoprods);
    data = Object.values(resultadoprods);
  }

  const mychart = new Chart(idSection, {
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
        },
      },
    }
  });
}