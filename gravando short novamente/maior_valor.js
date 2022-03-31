const livros = require('./lista_livros');

maiorValor = 0;

for (let i = 0; i < livros.length; i++) {
    if (livros[i].valor > livros[maiorValor].valor){
        maiorValor = i;
    }
}

console.log(`O livro mais caro é ${livros[maiorValor].titulo}, o seu valor é: ${livros[maiorValor].valor}`)