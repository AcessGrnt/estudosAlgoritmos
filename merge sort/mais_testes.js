const livros = require('./lista_livros');

function mergeSort (array) {
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena (parte1, parte2);
    }
    return array;
}

function ordena (parte1, parte2) {
    let posicaoAtual1 = 0;
    let posicaoAtual2 = 0;

    const listaAtual = []

    while (posicaoAtual1 < parte1.length && posicaoAtual2 < parte2.length) {
        produtoAtual1 = parte1[posicaoAtual1];
        produtoAtual2 = parte2[posicaoAtual2];

        if (produtoAtual1.valor < produtoAtual2.valor) {
            listaAtual.push(produtoAtual1);
            posicaoAtual1++;
        } else {
            listaAtual.push(produtoAtual2);
            posicaoAtual2++;
        }
    }

    return listaAtual.concat (posicaoAtual1 < parte1.length
        ? parte1.slice(posicaoAtual1)
        : parte2.slice(posicaoAtual2));
}

console.log(mergeSort(livros))