/*
El proposito de esta funcion es que se de clic a un boton
este entrara en un estado de "borrar", cuando se seleccione
un registro de la lista de productos se envia una alerta para
la confirmacion de borrar la lista
*/

export function borrarProdBoleta(IdBtnCancel, IdTableBody) {
  const $btnDelete = document.getElementById(IdBtnCancel),
    $ListBody = document.getElementById(IdTableBody),
    $rowTables = $ListBody.querySelectorAll("tr");
  //Detectar el cambio cuando se haga clic
  $btnDelete.addEventListener("click", e => {
    e.preventDefault();
    // Agregar diseño para el usuario sepa que puede eliminar
    $btnDelete.textContent = "Selecciona un producto";
    $btnDelete.disabled = true;
    $ListBody.classList.add("isRemove");
    $rowTables.forEach($tr => {
      // Detectar la columna de producto que se eliminara
      $tr.addEventListener("click", e => {
        // Confirmar borrado
        let isRemove = confirm("Esta seguro de quitar el producto de la boleta?");
        if(!isRemove) return location.reload();
        // Verificar que exista el localstorage de la boleta
        if(!localStorage.getItem("prodsBoleta")) return alert("No se encontro los productos de la boleta");
        // Obtener id y buscar los datos en el boleto
        let idProdDelete = Number($tr.id.split("-")[0]);
        let prodList = JSON.parse(localStorage.getItem("prodsBoleta")).filter(prod => prod.id === idProdDelete)
        if(prodList[0] == undefined) return alert("No se encontro el producto en el orden de ventas");
        //verificar que hay datos en el storage
        if(!localStorage.getItem("prods") || !localStorage.getItem("storageprod")) {
          return alert("No estan los datos correspondiente en el storage")
        }
        // Verificar que el producto exista en la lista de productos
        if(!JSON.parse(localStorage.getItem("prods")).some(prod => prod.id == idProdDelete)) {
          return alert("Este producto no existe en la lista general")
        }
        // Verificamos si el producto seleccionado esta en los datos del producto
        // para actualizarlo
        const ProdData = JSON.parse(localStorage.getItem("storageprod"));
        if(ProdData[0].id == idProdDelete) {
          ProdData[0].stock += parseInt(prodList[0].amount);
          localStorage.setItem("storageprod", JSON.stringify(ProdData))
        }
        // Actualizar los cambios de la boleta y productos
        let prodsBoletaRemoveItem = JSON.parse(localStorage.getItem("prodsBoleta")).filter(prod => prod.id != idProdDelete)
        localStorage.setItem("prodsBoleta", JSON.stringify(prodsBoletaRemoveItem));
        let prodsListUpdate = JSON.parse(localStorage.getItem("prods")).map(prod => {
          if(prod.id == idProdDelete) {
            prod.stock += parseInt(prodList[0].amount);
          }
          return prod
        })
        localStorage.setItem("prods", JSON.stringify(prodsListUpdate));
        location.reload();
      })
    })
  })
  
}

