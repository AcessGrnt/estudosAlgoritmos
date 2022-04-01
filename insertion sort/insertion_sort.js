const livros = require('../Pensando em algoritimos/lista_livros')

function insertionSort (lista) {
    for (let atual = 0; atual < livros.length; atual++) {
        
        let analise = atual;

        while (analise > 0 && lista[analise].valor < lista[analise -1].valor) {

            let itemAnalise = lista[analise];
            console.log('Atual', atual)
            console.log('Livro atual', lista[analise])
            
            let itemAnterior = lista[analise -1];
            console.log('Anterior', lista[analise - 1])

            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;

            analise-- // fará o while retornar
        }
    }

    console.log(lista)
}

insertionSort(livros)