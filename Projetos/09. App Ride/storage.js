
// Dadso zerados de uma nova corrida
function createNewRide() {
    const rideID = Date.now()
    const rideRecord = {
        data: [],
        startTime: rideID,
        stopTime: null
    }
    saveRideRecord(rideID, rideRecord)
    return rideID
}

// Apaga uma corrida
function deleteRide(rideID) {
    localStorage.removeItem(rideID)
}

// Pega a lista de todas as corridas
function getAllRides() {
    console.log(Object.entries(localStorage))
    return Object.entries(localStorage)
}

// Pega dados de localização do localStorage
function getRideRecord(rideID) {
    return JSON.parse(localStorage.getItem(rideID))
}

// Salva dados da localização no localStorage
function saveRideRecord(rideID, rideRecord) {
    if (rideRecord) {
        localStorage.setItem(rideID, JSON.stringify(rideRecord))
    }
}

// Adiciona posição aos dados já salvos
function addPosition(rideID, position) {

    const rideRecord = getRideRecord(rideID)
    const newData = {
        accuracy: position.coords.accuracy,
        altitude: position.coords.altitude,
        altitudeAccuracy: position.coords.altitudeAccuracy,
        heading: position.coords.heading,
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
        speed: position.coords.speed,
        timestamp: position.timestamp
    }
    rideRecord.data.push(newData)
    saveRideRecord(rideID, rideRecord)
}

// Atualiza tempo de parada
function updateStopTime(rideID) {
    const rideRecord = getRideRecord(rideID)
    rideRecord.stopTime = Date.now()
    saveRideRecord(rideID, rideRecord)
}