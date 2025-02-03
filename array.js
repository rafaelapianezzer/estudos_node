// const numero = [] // array vazio
// numero.push(1)
// numero.push(2)
// numero.push(3)
// numero.push(4)
// console.log('array push', numero)

// const removidoFim = numero.pop()
// console.log('array pop', numero)

// const removidoFrente = numero.shift()
// console.log('arry shift', numero)

// numero.unshift(99)
// console.log('array unshift', numero)

// unshift adiciona na frente
// push adiciona no final

// numero.unshift(910)
// numero.unshift(30)
// numero.unshift(80)
// numero.unshift(77)

// SLICE
// console.log(numero)
// const arraySlice = numero.slice(2, 4) // 2 é a posição do número no array - ele retorna da posição escolhida, até o final do array
// // 4 é a posição final
// console.log(arraySlice)

// SPLICE
// altera o array original e retorna os elementos removidos, se houver
// permite adicionar, demover ou substituir elementos de um array
// array.splice(início, númeroDeElementosParaRemover, elementosParaAdicionar);

// FOR EACH
// O método forEach() em JavaScript é usado para executar uma função em cada item de um array. 
// Ele é uma forma de iterar sobre todos os elementos do array, aplicando a função callback em cada um deles. 
// Este método não retorna um novo array e não pode ser interrompido (diferente do for tradicional, por exemplo).
// array.forEach(function(item, índice, array) {
//  código a ser executado em cada elemento
// });
const array = [1, 2, 4, 6, 10, 20]
let soma = 0;
array.forEach(item => {
    soma += item
})
console.log(soma)


