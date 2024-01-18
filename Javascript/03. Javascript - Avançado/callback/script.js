
let dobro = function (n) { return 2 * n };

console.log(dobro(3));

let usuarios = ["Adriano", "Juliana", "Fátima"]

function inserirUsuario(nome, callback) {

    setTimeout(() => {
        usuarios.push(nome);
        callback;
    }, 1000)
}

function listarUsuarios() {

    for (i = 0; i < usuarios.length; i++) {
        console.log((i + 1) + "º " + usuarios[i])
    }
}

inserirUsuario("Igor", listarUsuarios())