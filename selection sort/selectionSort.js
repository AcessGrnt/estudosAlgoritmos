// selection sort: ira fazer a seleção do maior para o maior

const livro = require('../Pensando em algoritimos/lista_livros');
const menorValor = require('../Pensando em algoritimos/menor_valor');

for (let atual = 0; atual < livro.length -1; atual++) {
    let menor = menorValor(livro, atual);

    let livroAtual = livro[atual];
    console.log('Atual', atual);
    console.log('livro atual', livro[atual])
    let livroMenor = livro[menor];
    console.log('livro menor', livro[menor])

    livro[atual] = livroMenor;
    livro[menor] = livroAtual;
}

console.log(livro)