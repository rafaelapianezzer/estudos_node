// // subtracao
// let numero1 = 100
// let numero2 = 50

// const subtracao = numero1 - numero2

// console.log(subtracao)

// // divisao 
// let num1 = 100
// let num2 = 5

// const divisao = num1 / num2

// console.log(divisao)

// // média de tres numeros
// let someNumeros = 1 + 2 + 3

// let media = someNumeros / 3

// console.log(media)

// // par ou impar
// const verificar = (numero) => {
//     if (numero % 2 === 0) { 
//         return "Este número é par";
//     } else { 
//         return "Este número é ímpar";
//     }
// };

// console.log(verificar(87))
// console.log(verificar(90))


// solicitar 3 numeros e verificar qual é o menor 
const verificarNumero = (num1, num2, num3) => {
    if(num1 > num2 && num1 > num3){
        console.log(`O ${num1} é maior que ${num2} e ${num3}`)
    } else if(num2 > num1 && num2 > num3){
        console.log(`O ${num2} é maior que o ${num1} e ${num3}`)
    } else {
        console.log(`O ${num3} é maior que o ${num1} e ${num2}`)
    }
}

// verificarNumero(8, 7, 6)


// pedir um ano e verificar se ele é bissexto

const verificarAno = (ano) => {
    if(ano % 4 === 0){
        console.log(`O ano de ${ano} é bissexto.`)
    } else {
        console.log(`O ano ${ano} não é bissexto`)
    }
}

// verificarAno(2020)







