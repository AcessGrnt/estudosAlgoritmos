const livros = require('./livros');

let maisCaro = 0;

for (let i = 0; i < livros.length; i++) {
    if (livros[i].valor > livros[maisCaro].valor) {
        maisCaro = i;
    }
}

console.log(`O livro mais caro é o ${livros[maisCaro].titulo}, o seu valor é de: ${livros[maisCaro].valor}`)