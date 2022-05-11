// AULA 06: ASYNC AWAIT, 

/* let usuarios = ["Jesus", "pedro", "thiagão", "joão"]

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

executar() */



// ---------------------------------------------------------
// AULA 07 -> FILTER, é um método do array que nos permite passar todos os elementos daquele array pelo filtro que determinarmos.

/* function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Bartolomeu", 33),
    novoAluno("Pedro", 30),
    novoAluno("Thiago", 32),
    novoAluno("Joao", 29),
    novoAluno("André", 28)
]

let mestres = [
    novoAluno("Jesus", 33),
    novoAluno("Moisés", 30),
    novoAluno("Davi", 32),
    novoAluno("Samuel", 29),
    novoAluno("Salomão", 28)
]

function temMaisDe30(qualquer) {
    return qualquer.idade >= 30
}

function temMenosDe30(qualquer) {
    return qualquer.idade < 30
}

console.log(mestres.filter(temMaisDe30))
console.log(alunos.filter(temMenosDe30)) */



// ---------------------------------------------------------
// AULA 07 -> MAP (high order function), serve pra gerar um novo array com informações do antigo array (de referência)

/* function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Bartolomeu", 33),
    novoAluno("Pedro", 30),
    novoAluno("Thiago", 32),
    novoAluno("Joao", 29),
    novoAluno("André", 28)
]

function nomeIdade(aluno) {
    return aluno.nome + ' tem ' + aluno.idade + ' anos.'
}

console.log(alunos.map(nomeIdade)) */



// ---------------------------------------------------------
// AULA 08 -> VALOR E REFERÊNCIA:


// ARRAY
// let turmaA = ["Pedro", "thiago", "joao", "lucas"]

// let turmaB = turmaA.slice() --> 1° método de clonagem de um array
//  let turmaB = [...turmaA] --> 2° método de clonagem de um array 

// turmaB.push("Ronaldo") turma B passará a ter esse aluno a mais sem afeta a turma A diretamente.


// OBJETO
// let pessoa1 = {
//     nome: "Marcelo",
//     idade: 20
// }

// let pessoa2 = Object.assign({}, pessoa1) --> 1° método de clonagem de um objeto
// let pessoa2 = {...pessoa1} --> 2° método de clonagem de um objeto

// pessoa2.idade = 15

// ATRIBUIÇÃO POR VAlOR, faz uma cópia do elemento original, e qualquer alteração na cópia não vai refletir no original.
//  ATRIBUIÇÃO POR REFERÊNCIA, não faz cópia, é como se desse um novo apelido para o elemento original. qualquer modificação no novo elemento altera também o original.



// ---------------------------------------------------------
// AULA 09 -> SPREAD OPERATOR:

// let pessoa = {
//     nome: "Marcelo Henrique",
//     idade: 20
// }

// let contato = {
//     cidade: "São Paulo",
//     telefone: 98960759
// }

// let pessoaContato = {...pessoa, ...contato}

// console.log(pessoaContato)