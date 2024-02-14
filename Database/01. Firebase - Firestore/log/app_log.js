const firebaseConfig = {

    apiKey: "AIzaSyCdAZazYartzaFHCTtgFfx6eMXXSEb6OwU",

    authDomain: "colegio-f308f.firebaseapp.com",

    projectId: "colegio-f308f",

    storageBucket: "colegio-f308f.appspot.com",

    messagingSenderId: "238901309142",

    appId: "1:238901309142:web:4acbf235600155dd0b6377",

    measurementId: "G-DGT5L6C909"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

/*
let newUserEmail = "novoteste@teste.com"
let newUserPassword = "123098a"

auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then((user) => {
    console.log(user)
}).catch((error) => {
    console.log(error)
})
*/

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log(user)
    } else {
        console.log("Ninguém Logado")
    }
})

function login() {
    let userEmail = "novoteste@teste.com"
    let userPassword = "123098a"

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
        auth.signInWithEmailAndPassword(userEmail, userPassword).then(() => {
            console.log(auth.currentUser)
        }).catch((error) => {
            console.log(error)
        })
    }).catch((error) => {
        console.log(error)
    })
}

function logout() {
    auth.signOut().then(() => {
        console.log("O usuário foi deslogado")
    }).catch((error) => {
        console.log(error)
    })
}

logout()
//setTimeout(login, 3000)