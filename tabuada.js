import input from 'readline-sync'

console.log("TABUADA EM JAVASCRIPT")

var n1 = input.question("Digite o valor que deseja a tabuada : ")

console.log(`TABUADA DE ${n1}`)

for (let i = 0; i <= 10; i++)
{
    console.log(`${n1} X ${i} = ${n1 * i}`)
}
