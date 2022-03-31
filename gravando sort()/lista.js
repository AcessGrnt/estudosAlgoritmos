const livros = require('./livros');
const menorValor = require('./menor_valor');

for (let atual = 0; atual < livros.length -1; atual++) {
    maisBarato = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('Atual', atual)
    console.log('Livro Atual', livros[atual])
    let menor = livros[maisBarato];
    console.log('Menor', livros[maisBarato]);

    livros[atual] = menor
    livros[maisBarato] = livroAtual
}

console.log(livros)

