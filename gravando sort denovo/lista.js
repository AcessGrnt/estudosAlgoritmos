const livros = require('./lista_livros');
const menorValor = require('./menor_valor');

for (let atual = 0; atual < livros.length -1; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('Atual', atual);
    console.log('livroAtual', livros[atual]);

    let maisBarato = livros[menor];
    console.log('Menor Valor', livros[menor])

    livros[atual] = maisBarato;
    livros[menor] = livroAtual;
}

console.log(livros)