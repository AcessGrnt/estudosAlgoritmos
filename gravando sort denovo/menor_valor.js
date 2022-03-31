const livros = require('./lista_livros');

function menorValor(arrValores, posiçãoInicial) {
    let menor = posiçãoInicial;

    for (let i = posiçãoInicial; i < arrValores.length; i++) {
        if (arrValores[i].valor < arrValores[menor].valor) {
            menor = i;
        }
    }
    return menor;
}

module.exports = menorValor;