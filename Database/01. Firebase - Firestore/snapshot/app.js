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
const db = firebase.firestore();

const TURMA = "turmaA"

db.collection(TURMA).get().then((snapshot) => {
    snapshot.forEach((doc) => {
        let aluno = doc.data()
        console.log(aluno.nome)
    })
})

let docRef = db.collection(TURMA).doc("fwLXoWpywgLyXdY3oRXq")

docRef.get().then((doc) => {
    let aluno = doc.data()
    console.log(aluno.nome)
})

// Seleciona dados a partir de seletor como nome, notas, etc, podendo usar ==, >, <, >=, <=
db.collection(TURMA).where("nome", "==", "Felipe").get().then((snapshot) => {
    snapshot.forEach((doc) => {
        let aluno = doc.data()
        console.log(aluno.notas)
    })
})

// Adiciona um documento em uma lista
/* db.collection(TURMA).add({
    nome: "Luiz",
    sobrenome: "Dero",
    notas: {nota1: 7, nota2: 9}
}).then((doc) => {
    console.log("Documento inserido com sucesso: ", doc)
}).catch((err) => {
    console.log(err)
}) */

// Posso adicionar ou atualizar um documento com set
db.collection(TURMA).doc("RHF9UkogmZUUeMsVzEWD").set({
    nome: "Giuliana",
    sobrenome: "Fabv",
    notas: { nota1: 5, nota2: 9 }
}).then(() => {
    console.log("Documento inserido com sucesso: ")
}).catch((err) => {
    console.log(err)
})

// Atualiza um documento a partir de um ID
db.collection(TURMA).doc("YBo7djspkDLfYyXpCcAh").update({
    nome: "Christopher",
    sobrenome: "Julian",
    notas: { nota1: 2, nota2: 9 }
}).then(() => {
    console.log("Documento atualizado com sucesso: ")
}).catch((err) => {
    console.log(err)
})

// Atualiza adicionando um novo campo
db.collection(TURMA).doc("ZfHcVBFzYhTjsleA9tqq").set({
    nome: "Vagner",
    sobrenome: "Smith",
    notas: { nota1: 2, nota2: 0 },
    cidades: ["Belo Horizonte"]
}).then(() => {
    console.log("Documento inserido com sucesso: ")
}).catch((err) => {
    console.log(err)
})

// Atualiza o dado de um array
db.collection(TURMA).doc("ZfHcVBFzYhTjsleA9tqq").update({
    cidades: firebase.firestore.FieldValue.arrayUnion("Cotia"),
}).then(() => {
    console.log("Documento atualizado com sucesso: ")
}).catch((err) => {
    console.log(err)
})

// Seleciona os dados em tempo real
docRef.onSnapshot((doc) => {
    let aluno = doc.data()
    console.log(aluno)
})

db.collection(TURMA).where("nome", "==", "Felipe").onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
        let aluno = doc.data()
        console.log(aluno)
    })
})

db.collection(TURMA).doc("aPSgzdTHIZrihXJdr4cY").delete({
}).then(() => {
    console.log("Documento apagado com sucesso: ")
}).catch((err) => {
    console.log(err)
})
