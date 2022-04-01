const livros = require('../Pensando em algoritimos/lista_livros')
const troca = require('./troca');

function insertionSort (lista) {
    for (let atual = 0; atual < lista.length; atual++) {

        let analise = atual;

        while (analise > 0 && lista[analise].valor < lista[analise - 1].valor) {
            
            troca(lista, analise);

            analise--
        }
    }
    console.log(lista);
}