/*
ESTA FUNCION SIRVE PARA HABILITAR LOS INPUTS DEL FORMULARIO BLOQUEADOS
- Necesita el boton que creara esta accion
- Nombre de clase que habilitara los formulario
*/
export function activeForm(btnActive, classElement) {
  const $btnActive = document.getElementById(btnActive), 
    $elements = document.querySelectorAll(classElement);
  
  $btnActive.addEventListener("click", e => {
    e.preventDefault();
    if(localStorage.getItem("storageprod")) return;
    $elements.forEach(el => {
      el.removeAttribute("disabled");
    })
  })
}

/*
ESTA FUNCION SIRVE PARA DESAHIBILITAR LOS INPUTS DEL FORMULARIO
- Necesita el boton que creara esta accion
- Nombre de clase que habilitara los formulario
*/
export function borrarVenta(btnActive, classElement) {
  const $btnActive = document.getElementById(btnActive), 
    $elements = document.querySelectorAll(classElement);
  
  $btnActive.addEventListener("click", e => {
    e.preventDefault();
    $elements.forEach(el => {
      el.setAttribute("disabled", "");
      if(el.classList.contains("input")) {
        el.value = "";
      }
    })
  })
}

/*
ESTA FUNCION SE INICIALIZARA AL INSTANTE
SE USARA HABILITAR LOS BLOQUEOS DEL FORMULARIO
*/

export function activeFormInit(classElement, namelocalStorage) {
  if(localStorage.getItem(namelocalStorage)) {
    const $elements = document.querySelectorAll(classElement);
    $elements.forEach(el => {
      el.removeAttribute("disabled");
    })
  }
}