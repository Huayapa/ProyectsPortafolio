export function resetStorage(btnid) {
  const $btn = document.getElementById(btnid);
  $btn.addEventListener("click", e => {
    const isRemove = confirm("Esta seguro de borrar todo los productos, boletas y clientes?");
    if(isRemove) {
      localStorage.clear();
      location.href = "./";
    }
  })
}