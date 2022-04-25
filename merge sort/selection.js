const {edGalho, edFolha} = require('./livros');

function juntaLista (lista1, lista2) {
    const listaFinal = [];
    let posicaoAtual1 = 0;
    let posicaoAtual2 = 0;
    let atual = 0;

    while (posicaoAtual1 < lista1.length && posicaoAtual2 < lista2.length) {
        let produtoAtual1 = lista1[posicaoAtual1];
        let produtoAtual2 = lista2[posicaoAtual2];
        console.log(`Comparando ${produtoAtual1.titulo}, com ${produtoAtual2.titulo}`)

        if (produtoAtual1.valor < produtoAtual2.valor) {
            listaFinal[atual] = produtoAtual1
            posicaoAtual1++
        } else {
            listaFinal[atual] = produtoAtual2
            posicaoAtual2++
        }
        atual++
    }

    while (posicaoAtual1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtual1]
        posicaoAtual1++
        atual++
    }

    while (posicaoAtual2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtual2]
        posicaoAtual2++
        atual++
    }
    
    return listaFinal
}


console.log(juntaLista (edGalho, edFolha))