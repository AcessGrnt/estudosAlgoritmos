const livros = require('./livros');

function menorValor (arrProdutos, posiçãoInicial) {
    let menorvalor = posiçãoInicial;

    for (let atual = posiçãoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].valor < arrProdutos[menorvalor].valor) {
            menorvalor = atual;
        }
    }

    return menorvalor;
}

module.exports = menorValor;