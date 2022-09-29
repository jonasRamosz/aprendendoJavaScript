let curos_idiomas = [
    {nome: "Inglês", preco: 2500, carga_horaria: 160},
    { nome: "Espanhol", preco: 1500, carga_horaria: 110},
    { nome: "Francês", preco: 3600, carga_horaria: 200},
    { nome: "Chinês", preco: 5500, carga_horaria: 400},
    { nome: "Alemão", preco: 3800, carga_horaria: 230}
]

for (let dados of curos_idiomas){

    let nome = dados.nome;
    let preco = dados.preco;
    let horas = dados.carga_horaria;
    let valor = preco/horas;
    console.log('')
    console.log(`Nome do curso: ${nome}`);
    console.log(`Carga horaria do curso: ${horas} horas`);
    console.log(`Preço do curso: R$${preco},00`);

    
    if (valor > 15){

        console.log(`Hora/Aula superior a RS15,00`)

    }
    else{
        console.log(`Hora/Aula inferior a R$15,00`)
    }

}


