// fazer tabuada de 0 a 10
// const num = 8

// for (let i = 0; i <= 10; i++){
//     console.log(
//         i + " x " + num +  " = " + num * i
//     )
// }


// quantos numeros pares existem entre 0 e 200
// const verPares = () => {
//     for (let i = 0; i <= 200; i++){
//        if(i % 2 === 0 ){
//         console.log(i)
//        }
//     }
// }

// verPares()

// somar todos os números entre -30 e 75
// const soma = () => {
//     let total = 0;

//     for(let i = -30; i <= 75; i++){
//         total += i;
//     }

//     console.log("Soma total:", total);
// }

// soma()

// funcao que receba um numero e itere o numero informado, multiplicando os valores
const multiplicar = (numero) => {
    let total = 1;

    for(let i = 1; i <= numero; i++){
            total *= i;
       
    }

    console.log(total)
}

multiplicar(10)

// 

