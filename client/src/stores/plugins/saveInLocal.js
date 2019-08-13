
export default store => {
    if (sessionStorage.state) store.replaceState(JSON.parse(sessionStorage.state))
    store.subscribe((mutation, state) => {
        sessionStorage.state = JSON.stringify(state)
    })
}