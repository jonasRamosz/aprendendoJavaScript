const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos',     declinacao: -59 },
    { nome: 'Gama Normídeos',         declinacao:         -50 },
    { nome: 'Pi Pupídeos',                    declinacao:       -45 },
    { nome: 'Líridas',                     declinacao:   34  },
    { nome: 'Eta Aquáridas',               declinacao:         -1  },
    { nome: 'Eta Líridas',           declinacao:       44  },
    { nome: 'Bootídeos de Junho',             declinacao: 48  },
    { nome: 'Alfa Capricornídeos',    declinacao:          -10 },
    { nome: 'Delta Aquáridas do Sul', declinacao:        -16 },
    { nome: 'Piscis Austrinídeos',             declinacao:   -30 },
    { nome: 'Perseidas',              declinacao:     58  },
];

function verificaDeclinaçãoNorte(dado){
    return dado.declinacao >= 0;
    }

const verificaDeclinaçãoSul = (dado) => {
    return dado.declinacao < 0;
}

function imprimiNorte(chuva){
    console.log(chuva);
}

function imprimiSul(chuva){
    console.log(chuva);
}

const chuvaNorte = chuvaDeMeteoros.filter(verificaDeclinaçãoNorte);
const chuvaSul = chuvaDeMeteoros.filter(verificaDeclinaçãoSul);

console.log('Chuvas do hemisferio norte');
chuvaNorte.forEach(imprimiNorte);
console.log('');
console.log('Chuvas do hemisferio sul');
chuvaSul.forEach(imprimiSul);



