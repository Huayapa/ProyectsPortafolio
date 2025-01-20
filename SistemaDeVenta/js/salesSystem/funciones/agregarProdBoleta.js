export function agregarProdBoleta(idBtnAdd, idAmountInput) {
  try {
    const $btnAdd = document.getElementById(idBtnAdd),
      $cantidadFormProd = document.getElementById(idAmountInput);
    $btnAdd.addEventListener("click", e => {
      e.preventDefault();
      // Verificar que exista el producto en el localstorage
      if(!localStorage.getItem("storageprod")) throw "No se encontro el producto seleccionado";
      let prodStorage = JSON.parse(localStorage.getItem("storageprod"))[0];  //Estos son todos los productos que se agregaran
      // Verificar que la cantidad no sea negativo, 0 o mayor a el stock
      const inputValue = Number($cantidadFormProd.value);
      if(inputValue <= 0 || (prodStorage.stock - inputValue) < 0) throw "No tiene stock suficiente en el producto";

      // Verificar que ese producto exista en los productos completos
      if(!localStorage.getItem("prods")) throw "No se encontro la lista de productos";
      let isprodsStorage = JSON.parse(localStorage.getItem("prods")).filter(prod => prod.id == prodStorage.id);
      if(isprodsStorage[0] == undefined) throw "Este producto no existe en la lista general";
      // Modificar los valores de stock y cantidad por los nuevos
      let posicionStorage = 0;
      const newProdsStorage = JSON.parse(localStorage.getItem("prods")).map((prod, i) => {
        if(prod.id == prodStorage.id) {
          posicionStorage = i;
          prod.amount = inputValue;
          prod.stock -= inputValue;
        }
        return prod
      })
      // console.log(posicionStorage);
      
      // Verificar si la boleta de venta tiene productos (si no tiene, se creara)
      if(!localStorage.getItem("prodsBoleta")) {
        localStorage.setItem("prodsBoleta", JSON.stringify([newProdsStorage[posicionStorage]]));
        // location.reload();
      }
      let prodsBoleta = JSON.parse(localStorage.getItem("prodsBoleta"));
      let isprodsBoleta = JSON.parse(localStorage.getItem("prodsBoleta")).filter(prod => prod.id == prodStorage.id);
      if(isprodsBoleta[0] != undefined) {
        let NewProdsBoletas = prodsBoleta.map((prod) => {
          if(prod.id == prodStorage.id) {
            prod.amount += inputValue;
            prod.stock = prodStorage.stock - inputValue;
          }
          return prod
        })
        localStorage.setItem("prodsBoleta", JSON.stringify(NewProdsBoletas)); //Me falta esto
      } else {
        prodsBoleta.push(newProdsStorage[posicionStorage]);
        localStorage.setItem("prodsBoleta", JSON.stringify(prodsBoleta)); //Me falta esto
      }
      // Verificar si existe el producto en la boleta o no
      // Actualizar los productos, el producto seleccionado y la boleta de productos
      localStorage.setItem("storageprod", JSON.stringify([newProdsStorage[posicionStorage]])); //✅
      localStorage.setItem("prods", JSON.stringify(newProdsStorage)); //✅
      location.reload()
    })
  } catch (err) {
    console.error(err)
    alert(`Ocurrio un problema: ${err}`);
  }
}