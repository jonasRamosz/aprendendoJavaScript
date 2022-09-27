import input from 'readline-sync';
console.log("CONVERSOR");

var n = input.question("Digite o valor em milhas que deseja converter para km : ");
var km = n/0.62137;

console.log(`km : ${km.toFixed(2)} KM's`);