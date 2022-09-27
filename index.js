import input from 'readline-sync';

const nome = input.question('Digite o seu nome: ');
const nome2 = input.question('Digite o seu nome: ');
console.log(`O nome digitado foi : ${nome} e a ${nome2}`);