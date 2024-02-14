
const LISTA = "lista"

function ler() {
    db.collection(LISTA).get().then((snapshot) => {
        snapshot.forEach((item) => {
            console.log(item.data())
        });
    }).catch((error) => {
        console.log(error)
    })
}

function escrever() {{
    db.collection(LISTA).add({item: "Água"}).then((doc) => {
        console.log(doc)
    }).catch((error) => {
        console.log(error)
    })
}}