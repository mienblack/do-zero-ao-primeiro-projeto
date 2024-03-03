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

// criarUsuario("novoteste@teste.com", "123098a")

// Cria um novo usuário
function criarUsuario(user, password) {
    let newUserEmail = user
    let newUserPassword = password

    auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then((user) => {
        console.log(user)
    }).catch((error) => {
        console.log(error)
    })
}

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log(user)
    } else {
        console.log("Ninguém Logado")
    }
})

// Faz login a partir de usuario e senha
function login(user, password) {
    let userEmail = user
    let userPassword = password

    // Cria uma persistencia dos dados com LOCAL, SESSION ou NONE
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

// Desloga o usuário
function logout() {
    auth.signOut().then(() => {
        console.log("O usuário foi deslogado")
    }).catch((error) => {
        console.log(error)
    })
}

//setTimeout(login("novoteste@teste.com", "123098a"), 3000)
setTimeout(logout, 3000)