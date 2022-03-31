const livros = require('./lista_livros');

maiorValor = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].valor > livros[maiorValor].valor) {
        maiorValor = atual;
    }
}

console.log(`O livro mais caro é ${livros[maiorValor].titulo}, o seu valor é: ${livros[maiorValor].valor}`)