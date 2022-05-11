// AULA 06: ASYNC AWAIT, 

let usuarios = ["Jesus", "pedro", "thiagão", "joão"]

function addUsuario (nome) {
    
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome)
            let error = false
            if(!error) {
                resolve()
            } else {
                reject({msg:"erro de qualquer coisa"})
            }
        }, 2000)
    })
    
    return promise
}

function listarUsuarios() {
    console.log(usuarios)
}

async function executar() {

    await addUsuario("Judas")
    listarUsuarios()


}

executar()