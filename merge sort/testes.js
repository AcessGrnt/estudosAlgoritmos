const livros = require('./lista_livros');

function mergeSort (array) {
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length))
        array = ordena (parte1, parte2);
    }
    return array;
}

function ordena (lista1, lista2) {
    let posicaoAtual1 = 0;
    let posicaoAtual2 = 0;

    const resultado = [];

    while (posicaoAtual1 < lista1.length && posicaoAtual2 < lista2.length) {
        let produtoAtual1 = lista1[posicaoAtual1];
        let produtoAtual2 = lista2[posicaoAtual2];
        console.log(`Comparando ${produtoAtual1.titulo} com ${produtoAtual2.titulo}`)

        if (produtoAtual1.valor < produtoAtual2.valor) {
            resultado.push(produtoAtual1)
            posicaoAtual1++
        } else {
            resultado.push(produtoAtual2)
            posicaoAtual2++
        }
    }

    return resultado.concat (posicaoAtual1 < lista1.length
        ? lista1.slice(posicaoAtual1)
        : lista2.slice(posicaoAtual2)
        );
}

console.log(mergeSort (livros))