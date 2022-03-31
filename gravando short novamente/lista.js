const livros = require('./lista_livros');
const menorValor = require('./menor_valor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('Posição atual: ', atual);
    console.log('Livro Atual: ', livros[atual]);

    let maisBarato = livros[menor];
    console.log('Mais barato: ', livros[menor]);

    livros[atual] = maisBarato;
    livros[menor] = livroAtual;
}

console.log(livros)