function getFromLocalStorage(data = [], stateSlice) {
    const state = JSON.parse(localStorage.getItem("app-state"))
    return state ? state[stateSlice] :  data;
}
  
function setToLocalStorage(state) {
    localStorage.setItem("app-state", JSON.stringify(state))
}

export { getFromLocalStorage, setToLocalStorage}