import input from 'readline-sync';

console.log('COMVERSOR DE TEMPERATURA C PARA F');
const n = input.question('Digite a temperatra em Celsius : ');

const valor = (n * 1.8) + 32;

console.log(`O valor de ${n} graus Celsius é equivalente a ${valor} Fareinhant`);