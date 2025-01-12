
/*
FUNCION PARA ACTIVAR LA ACCION DE EDICION DE LOS PRODUCTOS
CUANDO SE HAGA CLIC A UNA TABLA SE BUSCARA EN EL LOCASTORAGE POR SU ID
*/
export function editarProductos(btnEditId, tableMainProds, idform, classInputs) {
  const $btnEdit = document.getElementById(btnEditId);
  
  $btnEdit.addEventListener("click", e => {
    e.preventDefault();
    if($btnEdit.textContent == "Cancelar") {
      location.reload()
    }
    // Poner modo edicion
    const $body = document.querySelector("body"),
    $tablebody = document.getElementById(tableMainProds);
    $body.style.cursor = "pointer";
    $btnEdit.style.opacity = "0.7";
    $btnEdit.style.backgroundColor = "darkred";
    $btnEdit.style.color = "white";
    $btnEdit.textContent = "Cancelar";
    $tablebody.style = "background-color: yellow";
    $tablebody.classList.add("edit-active")
    // Evento para detectar la fila de producto
    const $trId = $tablebody.querySelectorAll("tr");
    $trId.forEach((tr) => {
      tr.addEventListener("click", e => {
        if(!tr.id) return;
        const id = tr.id.split("-")[0];
        // Mostrar los datos a editar en el formulario
        let $formMain = document.getElementById(idform);
        if(!localStorage.getItem("prods")) {
          alert("No hay productos disponibles");
          location.reload();
        }
        const $productos = JSON.parse(localStorage.getItem("prods")).filter(prod => prod.id == id);
        $formMain.idprod.value = $productos[0].id;
        $formMain.producto.value = $productos[0].product;
        $formMain.descript.value = $productos[0].descript;
        $formMain.cantidad.value = $productos[0].amount;
        $formMain.precio.value = $productos[0].price;
        $formMain.stock.value = $productos[0].stock;
        // Habilitar inputs
        const $inputs = document.querySelectorAll(classInputs);
        $inputs.forEach($input => {
          $input.removeAttribute("disabled");
        })
      })
    })
  });
}