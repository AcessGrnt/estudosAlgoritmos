const livros = require('./lista_livros')

let maisCaro = 0;

for (let i = 0; i < livros.length; i++) {
    if(livros[i].valor > livros[maisCaro].valor) {
        maisCaro = i;
    }
}

console.log(`O livro mais barato é ${livros[maisCaro].titulo}, e o seu valor é: ${livros[maisCaro].valor}`)