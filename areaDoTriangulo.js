import input from 'readline-sync';

console.log('Calcular a base do triangulo');
console.log('');

const base = input.question('Informe a base do triangulo : ');
const altura = input.question('Informe a altura do triangulo : ');

const area = (base * altura) / 2;

console.log(`A area do triangulo é : ${area}`);