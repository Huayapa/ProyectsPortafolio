export function borrarBoleta(btnActive, classElement) {
  const $btnActive = document.getElementById(btnActive), 
    $elements = document.querySelectorAll(classElement);
  
  $btnActive.addEventListener("click", e => {
    e.preventDefault();
    // Verificar si desea borrar todo
    let isDelete = confirm("Desea borrar esta boleta?");
    if(!isDelete) return;
    $elements.forEach(el => {
      // Limpiar Inputs
      el.setAttribute("disabled", "");
      if(el.classList.contains("input")) el.value = "";
    })
    // Limpiar dato del producto
    if(localStorage.getItem("storageprod")) localStorage.removeItem("storageprod");
    // Devolver el stock
    if(localStorage.getItem("prods") && localStorage.getItem("prodsBoleta")) {
      // Comparo los productos con su identificado con todos los productos, para devolver el stock
      let prodsBoleta = JSON.parse(localStorage.getItem("prodsBoleta"));
      let prodsGlobal = JSON.parse(localStorage.getItem("prods")).map(prodGlobal => {
        prodsBoleta.forEach(prodBoleta => {
          if(prodBoleta.id == prodGlobal.id) {
            prodGlobal.stock += Number(prodBoleta.amount);
          }
        })
        return prodGlobal
      })
      localStorage.setItem("prods", JSON.stringify(prodsGlobal))
    }
    // Remover la boleta de productos
    localStorage.removeItem("prodsBoleta");
    location.reload();
  })
}