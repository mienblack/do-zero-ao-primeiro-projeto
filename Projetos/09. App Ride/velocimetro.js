let speedElement = document.querySelector("#speed")
let startBtn = document.querySelector("#start")
let stopBtn = document.querySelector("#stop")

let watchID = null
let currentRide = null
startBtn.addEventListener("click", () => {
    if (watchID) {
        return
    }
    // Caso haja sucesso em encontrar a posição
    function handleSuccess(position) {
        addPosition(currentRide, position)
        console.log(position)
        // Alterar a velocidade mostrada
        speedElement.innerText = position.coords.speed ? (position.coords.speed * 3.6).toFixed(1) : 0
    }

    // Caso haja algum erro ao tentar encontrar a posição
    function handleError(err) {
        console.log(err.msg)
    }

    const options = { enableHighAccuracy: true }

    // Armazenar dados da cirrida para mostrar
    currentRide = createNewRide()

    // Para utilizar a API de geolocalização
    watchID = navigator.geolocation.watchPosition(handleSuccess, handleError, options)

    startBtn.classList.add("d-none")
    stopBtn.classList.remove("d-none")
})

stopBtn.addEventListener("click", () => {
    if (!watchID) {
        return
    }

    // Limpar valores de velocidade do WatchID
    navigator.geolocation.clearWatch(watchID)
    watchID = null
    updateStopTime(currentRide)

    startBtn.classList.remove("d-none")
    stopBtn.classList.add("d-none")

    window.location.href = "./"
})