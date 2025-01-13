export function setStorage(nameStorage, listItems) {
  localStorage.setItem(nameStorage, JSON.stringify(listItems));
}
export function getStorage(nameStorage) {
  return JSON.parse(localStorage.getItem(nameStorage));
}