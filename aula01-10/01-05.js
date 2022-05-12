// AULA 01 -> STRICT: usando o strict, ele te obriga a declarar a variavel atraves de um var, let, const e nao somente seu nome isolado

// let x1 = 7 --> forma correta;
// x2 = 2  --> forma errada;

// "use strict" // --> declaração do mesmo

// var x = 4
// var i

// function imprimir(){

//     for (i = 1 ; i <= x ; i++) {

//         console.log(i)
//     }
// }

// console.log(imprimir())



// ---------------------------------------------------------
//AULA 02 -> BIND: explica a importância do atributo 'bind' que pode ser muito util em ReactJS e que nos indica qual é o this que queremos

// function speakGeneric() {
//     console.log(this.sound)
// }

// let dog = {
//     sound: "au au",
//     speak: speakGeneric
// }

// let cat = {
//     sound: "miau miau",
//     speak: speakGeneric
// }

// cat.speak()
// dog.speak()

// let bindedFunction = speakGeneric.bind(cat)
// bindedFunction()




// ---------------------------------------------------------
// AULA 03 -> ARROW FUNCTION: o unico problema dessa função é que a mesma não identifica quando atribuímos o 'this' a ela, retornando ao inves do que queremos, o "document.window".

// let x = (x) => {
//     return x * 2
// }

// console.log(x(2))

// let y = y => {
//     return y * 3
// }

// console.log(y(8))



// ---------------------------------------------------------
// AULA 04 -> FUNÇÃO CALLBACK: serve para que uma função só seja executada depois de outra acontecer;

// let usuarios = ["Jesus", "pedro", "thiagão", "joão"]

// function addUsuario (nome, callBack) {
//     setTimeout(() => {
//         usuarios.push(nome)
//         callBack()
//     }, 2000)
// }

// function listarUsuarios() {
//     console.log(usuarios)
// }

// addUsuario("Tiaguinho", listarUsuarios)



// ---------------------------------------------------------
// AULA 05 -> PROMISES; é uma outra forma de lidar com o código assíncrono, lidando melhor com tratamento de erros

// let usuarios = ["Jesus", "pedro", "thiagão", "joão"]

// function addUsuario (nome) {
    
//     let promise = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             usuarios.push(nome)
//             let error = false
//             if(!error) {
//                 resolve()
//             } else {
//                 reject({msg:"erro de qualquer coisa"})
//             }
//         }, 2000)
//     })
    
//     return promise
// }

// function listarUsuarios() {
//     console.log(usuarios)
// }

// addUsuario("Tiaguinho").then(listarUsuarios).catch(error.msg)

