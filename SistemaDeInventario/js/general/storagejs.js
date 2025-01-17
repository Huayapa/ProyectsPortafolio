export function setStorage(nameStorage, listItems) {
  localStorage.setItem(nameStorage, JSON.stringify(listItems));
}
export function getStorage(nameStorage) {
  let storage = localStorage.getItem(nameStorage)
  if(storage == "undefined") {
    return undefined;
  } else {
    return JSON.parse(storage)
  }
}