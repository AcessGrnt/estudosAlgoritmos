const livros = require('./lista_livros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++ ) {
    //      atual será o primeiro valor da array
    if (livros[atual].valor < livros[maisBarato].valor) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa: ${livros[maisBarato].valor}, e o titulo é ${livros[maisBarato].titulo}`);

