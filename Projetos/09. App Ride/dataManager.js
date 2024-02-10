
// Pega os dados da localização com base na latitude  elongitude guardadas
async function getLocationData(latitude, longitude) {

    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    let response = await fetch(url)
    return await response.json()
}

// Separa a maior velocidade registrada
function getRideMaxSpeed(positions) {
    let maxSpeed = 0
    positions.forEach(position => {
        if (position.speed != null && position.speed > maxSpeed) {
            maxSpeed = position.speed
        }
    })
    return (maxSpeed * 3.6).toFixed(1)
}

// Calcula a distância percorrida
function getRideDistance(positions) {
    const earthRadiusKm = 6371
    let totalDistance = 0
    for (let i = 0; i < positions.length - 1; i++) {
        const position1 = {
            latitude: positions[i].latitude,
            longitude: positions[i].longitude
        }
        const position2 = {
            latitude: positions[i + 1].latitude,
            longitude: positions[i + 1].longitude
        }
        const deltaLatitude = toRad(position2.latitude - position1.latitude)
        const deltaLongitude = toRad(position2.longitude - position1.longitude)

        const a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
            Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2) *
            Math.cos(toRad(position1.longitude)) *
            Math.cos(toRad(position2.longitude))

        const c = 2 * MAth.atan2(Math.sqrt(a), Math.sqrt(1 - a))

        const distance = earthRadiusKm * c

        totalDistance += distance
    }
    return totalDistance.toFixed(2)
}

// Converter graus para raidanos
function toRad(degree) {
    return degree * Math.PI / 360
}

// Quanto tempo durou a corrida
function getRideDuration(ride) {

    function format(number, digits) {
        return String(number.toFixed(0)).padStart(2, "0")
    }

    const interval = (ride.stopTime - ride.startTime) / 1000
    const minutes = Math.trunc(interval / 60)
    const seconds = interval % 60
    return `${format(minutes, 2)}:${format(seconds, 2)}`
}

// Em qual data a corrida iniciou
function getStartDate(ride) {
    const date = new Date(ride.startTime)

    const dia = date.toLocaleDateString("pt-BR", { day: "numeric" })
    const mes = date.toLocaleDateString("pt-BR", { month: "long" })
    const ano = date.toLocaleDateString("pt-BR", { year: "numeric" })

    let hora = date.toLocaleDateString("pt-BR", { hour: "2-digit" })
    let minuto = date.toLocaleDateString("pt-BR", { minute: "2-digit" })
    return `${hora.slice(hora.length - 2)}:${minuto.slice(hora.length - 2)} - ${mes} ${dia}, ${ano}`
}