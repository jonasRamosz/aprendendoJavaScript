import input from 'readline-sync';

console.log('Aplicação de juros \n');

const valor = input.question('Informe o valor da divida : ');
const dias = input.question('Informe quantos dias se passaram desde o vencimento da divida : ');

var valorFinal = '';

if (dias > 15){
    valorFinal = (valor * 0.1) + Number(valor);
}
else{
    valorFinal = (valor * 0.05) + Number(valor);
}
console.log('');
console.log(`valor original da divida : ${valor}`);
console.log(`dias em atraso ${dias}`);
console.log(`Valor total com juros : R$ ${valorFinal}`);