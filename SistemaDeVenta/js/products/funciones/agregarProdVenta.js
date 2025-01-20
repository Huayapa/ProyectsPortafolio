export function agregarAVenta(tablaThebody, locationhref) {
  const $mainRegist = document.getElementById(tablaThebody),
    $rowstable = $mainRegist.querySelectorAll("tr");
  
    $rowstable.forEach(el => {
      el.addEventListener("click", e => {
      if($mainRegist.classList.contains("edit-active")) return;
      let valueId = el.getAttribute("id");
      if(valueId === null) {
        console.error("Este registro no tienen un identificador");
        return;
      }
      // Guardar el producto que se cargara
      const id = valueId.split("-")[0];
      let dataProd = JSON.parse(localStorage.getItem("prods")).filter(prod => prod.id == id)
      // console.log(dataProd)
      localStorage.setItem("storageprod", JSON.stringify(dataProd));
      location.href = locationhref;
    })
  })
}
