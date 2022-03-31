const livros = require('./lista_livros');

function menorValor (arrValores, posiçãoInicial) {
    menor = posiçãoInicial;

    for (let atual = posiçãoInicial; atual < arrValores.length; atual++) {
        if (livros[atual].valor < livros[menor].valor) {
            menor = atual;
        }        
    }
    return menor;
}

module.exports = menorValor;
