// altura de 5 pessoas e calcular a média
// const alturas = [1.30, 1.50, 1.60, 1.80, 2]

// let soma = 0;
// for(let i = 0; i < alturas.length; i++){
//     soma += alturas[i]
// }

// console.log('a média das aturas é:', soma / alturas.length)

// Peso de 5 pessoas e calcular a média
// const pesos = [50, 83, 57.500, 53, 48]

// let soma = 0;
// for(let i = 0; i < pesos.length; i++){
//     soma += pesos[i]
// }

// console.log("A média dos pesos é:", soma / pesos.length)


// ler 10 números e identifdicar quais desses números são negativos
// const numeros = [10, -5, -3, 22, -30, 40]

// for(let i = 0; numeros.length; i++){
//     if(numeros[i] < 0){
//         console.log('número negativo', numeros[i])
//     }
// }

// PREENCHER UM VETOR COM 15 NÚMEROS ALEATÓRIOS
// let numeros = [];

// for (let i = 0; i < 15; i++) {
//     numeros.push(Math.floor(Math.random() * 100)); // Gera um número aleatório entre 0 e 99
// }

// console.log(numeros);

// LER UM ARRAY REFERENTE A NOTAS DE UMA PROVA
// INFORMAR A MAIOR E A MENOR NOTA
// INFORMAR A MÉDIA DAS NOTAS
// IMPRIMIR QUAIS ALUNOS TIRARAM A MENOR E A MAIOR NOTA, IMPRIMINDO O ÍNDICE DO VETOR

const notas = [
    { nome: "Laila", nota: 8.5 },
    { nome: "Boris", nota: 7},
    { nome: "Cacau", nota: 8 },
    { nome: "Chico", nota: 9 },
    { nome: "Hulk", nota: 7.9 },
    { nome: "Theo", nota: 8 },
];

let maiorNota = notas[0].nota; 
let alunoMaiorNota = notas[0].nome;

for(let i = 0; i < notas.length; i++){
    if(notas[i].nota > maiorNota){
        maiorNota = notas[i].nota;
        alunoMaiorNota = notas[i].nome
    }
}

let menorNota = notas[0].nota;
let alunoMenorNota = notas[0].nota;

for(let i = 0; i < notas.length; i++){
    if(notas[i].nota < menorNota){
        menorNota = notas[i].nota;
        alunoMenorNota = notas[i].nome
    }
}

let totalNotas = 0;

for(let i = 0; i < notas.length; i++){
    totalNotas += notas[i].nota
}

let media = totalNotas / notas.length



console.log(`O aluno com a maior nota é o ${alunoMaiorNota}, com nota ${maiorNota}, e o aluno com a menor o ${alunoMenorNota}, com nota ${menorNota}.`)
console.log("A média das notas da turma é:", media.toFixed(2));
console.log(`O aluno com a maior nota é ${alunoMaiorNota}, com nota ${maiorNota}.`);
console.log(`O aluno com a menor nota é ${alunoMenorNota}, com nota ${menorNota}.`);


