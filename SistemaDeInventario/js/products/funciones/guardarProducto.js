/*
Funcion para guardar el producto
*/
export function keepProdStorage(btnActiveId, FormId) {
  const $form = document.getElementById(FormId),
    $btnForm = document.getElementById(btnActiveId);
  $form.addEventListener("submit", e => {
    if(e.submitter != $btnForm) return;
    e.preventDefault();
    const {producto, descript, cantidad, precio, stock, idprod} = $form;
    if([producto, descript, cantidad, precio, stock].some(field => field.value === "")) {
      return
    }
    //Si no existe en el localStorage "prods", se creara uno
    if(!window.localStorage.getItem("prods")) {
      let prods = {
        id: 1,
        product: producto.value, 
        descript: descript.value, 
        amount: cantidad.value, 
        price: precio.value, 
        stock: stock.value
      };
      window.localStorage.setItem("prods", JSON.stringify([prods]));
      location.reload();
      return;
    }
    // Verificar que si se va editar el producto
    if(idprod.value != "") {
      let editProd = JSON.parse(localStorage.getItem("prods"))
      .map(prod => {
        if(prod.id == idprod.value) {
          let newProduct = {
            id: prod.id,
            product: producto.value, 
            descript: descript.value, 
            amount: cantidad.value, 
            price: precio.value, 
            stock: stock.value
          }
          return newProduct;
        }
        return prod;
      })
      window.localStorage.setItem("prods", JSON.stringify(editProd));
      alert("Editado correctamente")
      location.reload();
      return;
    }
    /*
    Si ya existe el localStorage:
    -tomara los valores de storage y lo almacenara en el nuevo arreglo
    -Usamos la funcion formObject para agrupar los datos del formulario
    -A ese nuevo arreglo agregamos el nuevo valor 
    y lo guardamos de nuevo en el localStorage
    */
    let newProducts = [];
    let products = JSON.parse(window.localStorage.getItem("prods"));
    let idGenerate = 1;

    products.forEach(product => {
      newProducts.push(product);
      if(idGenerate == product.id) {
        idGenerate++;
      }
    });
    // Formar nuevo producto
    newProducts.push({
      id: idGenerate,
      product: producto.value, 
      descript: descript.value, 
      amount: cantidad.value, 
      price: precio.value, 
      stock: stock.value
    });

    window.localStorage.setItem("prods", JSON.stringify(newProducts));
    location.reload();
  })
}

