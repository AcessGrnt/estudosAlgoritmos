function troca (lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnalisado = lista[analise -1];

    lista[analise -1] = itemAnalise;
    lista[analise] = itemAnalisado;
}

module.exports = troca;