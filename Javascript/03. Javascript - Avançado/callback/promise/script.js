
let usuarios = ["Adriano", "Juliana", "Fátima"]

function inserirUsuario(nome) {

    let promise = new Promise(
        function (resolve, reject) {
            setTimeout(() => {
                usuarios.push(nome);
                let error = false;

                if (!error) {
                    resolve();
                } else {
                    reject({msg: "Algum erro!" });
                }
            }, 1000);
        })
    return promise;

}

function listarUsuarios() {

    for (i = 0; i < usuarios.length; i++) {
        console.log((i + 1) + "º " + usuarios[i])
    }
}

inserirUsuario("Igor").then(listarUsuarios).catch((error) => {console.log(error.msg)})