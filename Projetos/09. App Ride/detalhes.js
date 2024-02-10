const params = new URLSearchParams(window.location.search)
const rideID = params.get("id")
const ride = getRideRecord(rideID)

document.addEventListener("DOMContentLoaded", async () => {

    const firstPosition = ride.data[0]
    const firstLocationData = await getLocationData(firstPosition.latitude, firstPosition.longitude)

    const dataElement = document.createElement("div")
    dataElement.className = "flex-fill d-flex flex-column"

    const cidadeDiv = document.createElement("div")
    cidadeDiv.innerText = `${firstLocationData.city} - ${firstLocationData.countryCode}`
    cidadeDiv.className = "text-primary mb-2"

    const velocidadeMaximaDiv = document.createElement("div")
    velocidadeMaximaDiv.innerText = `Velocidade Máxima: ${getRideMaxSpeed(ride.data)} Km/h`
    velocidadeMaximaDiv.className = "fw-bold"

    const posicaoDiv = document.createElement("div")
    posicaoDiv.innerText = `Distância: ${getRideDistance(ride.data)} Km`

    const duracaoDiv = document.createElement("div")
    duracaoDiv.innerText = `Duração: ${getRideDuration(ride)}`

    const dataDiv = document.createElement("div")
    dataDiv.innerText = getStartDate(ride)
    dataDiv.className = "text-secondary mt-2"

    dataElement.appendChild(cidadeDiv)
    dataElement.appendChild(velocidadeMaximaDiv)
    dataElement.appendChild(posicaoDiv)
    dataElement.appendChild(duracaoDiv)
    dataElement.appendChild(dataDiv)

    document.querySelector("#data").appendChild(dataElement)

    const map = L.map("map-detail")
    map.setView([firstPosition.latitude, firstPosition.longitude], 16)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    console.log(ride.data)
    const positionsArray = ride.data.map(position => {
        return [position.latitude, position.longitude]
    })

    const polyline = L.polyline(positionsArray, { color: "blue" }).addTo(map)
    map.fitBounds(polyline.getBounds())

    const deleteBtn = document.querySelector("#delete-btn")
    deleteBtn.addEventListener("click", () => {

        deleteRide(rideID)
        window.location.href = "./"
    })
})