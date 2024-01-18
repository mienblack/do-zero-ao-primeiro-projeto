const firebaseConfig = {

    apiKey: "AIzaSyByP7FNmjyjHBSoErH0Ijg-57R-g80DZ_4",

    authDomain: "dev-web-91027.firebaseapp.com",

    projectId: "dev-web-91027",

    storageBucket: "dev-web-91027.appspot.com",

    messagingSenderId: "237092352786",

    appId: "1:237092352786:web:a69a3a289e5b9d71ab79cb"

};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const ref = storage.ref("/noname")
const file = ref.child("mienDesenho.jpg")

file.getDownloadURL().then((url) => {
    console.log(file.name)
    console.log(url)
})

file.root.listAll().then((res) => {
    console.log(res)
})

let fileInput = document.getElementById('fileInput')
fileInput.addEventListener('change', (event) => {
    let fileUp = event.target.files[0]
    ref.put(fileUp).then((snapshot) => {
        console.log(snapshot)
    })
})

let newMetadata = {
    contentType: "image/png"
}

file.getMetadata().then((metadata) => {

    console.log(metadata)
})

file.updateMetadata(newMetadata).then((metadata) => {
    console.log(metadata)
}).catch((error) => {
    console.log(error)
})