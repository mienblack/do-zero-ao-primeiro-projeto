let rideListElement = document.querySelector("#rideList")
const allRides = getAllRides()

allRides.forEach(async ([id, value]) => {
    if (id != undefined) {
        const ride = JSON.parse(value)
        ride.id = id

        const itemElement = document.createElement("li")
        itemElement.id = ride.id
        itemElement.className = "d-flex p-1 align-items-center justify-content-between gap-3 shadow-sm"
        rideListElement.appendChild(itemElement)

        itemElement.addEventListener("click", () => {
            window.location.href = `./detalhes.html?id=${ride.id}`
        })

        const firstPosition = ride.data[0]
        const firstLocationData = await getLocationData(firstPosition.latitude, firstPosition.longitude)

        const mapID = `map${ride.id}`
        const mapElement = document.createElement("div")
        mapElement.id = mapID
        mapElement.style = "width:100px;height:100px"
        mapElement.classList.add("bg-secondary")
        mapElement.classList.add("rounded-4")

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

        itemElement.appendChild(mapElement)
        itemElement.appendChild(dataElement)

        const map = L.map(mapID, {
            attributionControl: false,
            zoomControl: false,
            dragging: false,
            scrollWheelZoom: false
        })
        map.setView([firstPosition.latitude, firstPosition.longitude], 16)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

        }).addTo(map);
        L.marker([firstPosition.latitude, firstPosition.longitude]).addTo(map)
    }
    return
})
