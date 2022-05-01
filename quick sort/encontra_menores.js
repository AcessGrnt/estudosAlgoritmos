const livros = require('./livros');

function encontraMenores (pivo, array) {

    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];

        if (produtoAtual.valor < pivo.valor) {
            menores++
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores);
    return array;
}

function trocaLugar (array, de, para) {
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
}

function divideNoPivo (array) {
    let pivo = array[Math.floor(array.length / 2)];
    encontraMenores(pivo, array);

    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];

        if(atual.valor <= pivo.valor && atual !== pivo) {
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++
        }
    }

    return array
}

console.log(encontraMenores(livros[2], livros))

console.log(divideNoPivo(livros))