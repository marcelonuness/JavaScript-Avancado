// AULA 11 -> REDUCE: serve para reduzir todas as entradas de um array, ou seja, seu conjunto de dados, em uma entrada apenas, concatenando todas em um só.

// function novoAluno (nome, idade) {
//     return { nome, idade }
// }

// let alunos = [
//     novoAluno("Pedro", 33),
//     novoAluno("Thiago", 15),
//     novoAluno("João", 35),
//     novoAluno("Barbosa", 78)
// ]

// function idadeDaTurma(total, aluno) {
//     return total + aluno.idade

// }

// console.log(alunos.reduce(idadeDaTurma, 0))



// ---------------------------------------------------------
// DESAFIO JAVASCRIPT AVANÇADO


//MAP de forma pura:
// function novoAluno(nome, idade) {
//     return {nome, idade}
// }

// let alunos = [
//     novoAluno("Bartolomeu", 33),
//     novoAluno("Pedro", 30),
//     novoAluno("Thiago", 32),
//     novoAluno("Joao", 29),
//     novoAluno("André", 28)
// ]

// for (let i = 0 ; i <= alunos.length ; i++) {
//     console.log(alunos[i].nome + ' tem ' + alunos[i].idade + ' anos de idade')
// }



//REDUCE de forma pura:

// function novoAluno(nome, idade) {
//     return { nome, idade }
// }

// let alunos = [
//     novoAluno("Pedro", 33),
//     novoAluno("Thiago", 15),
//     novoAluno("João", 35),
//     novoAluno("Barbosa", 78)
// ]

// let soma = 0

// for (let i = 0 ; i <= 3 ; i++) {
//     soma += alunos[i].idade
// }

// console.log(soma)

