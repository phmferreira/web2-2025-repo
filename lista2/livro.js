/**
 * Implementação usando Classe para questão Sistema de Gestão de Livros
 */
class Livro {
  /**
   * Construtor da classe Livro.
   * @param {string} titulo - O título do livro.
   * @param {string} autor - O autor do livro.
   * @param {number} anoPublicacao - O ano de publicação do livro.
   */
  constructor(titulo, autor, anoPublicacao) {
    // 1. Validar o título
    if (typeof titulo !== 'string' || titulo.trim() === '') {
      throw new Error("O título do livro não pode ser vazio.");
    }

    // 2. Validar o autor
    if (typeof autor !== 'string' || autor.trim() === '') {
      throw new Error("O nome do autor não pode ser vazio.");
    }

    // 3. Validar o ano de publicação
    const anoAtual = new Date().getFullYear();
    if (typeof anoPublicacao !== 'number' || anoPublicacao < 1500 || anoPublicacao > anoAtual) {
      throw new Error(`Ano de publicação inválido. Deve ser um número entre 1500 e ${anoAtual}.`);
    }

    // Atribuição dos atributos do objeto
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
}

console.log("\n--- Exemplos usando a classe Livro ---");

try {
    const livroValido = new Livro("Auto da Compadecida", "Ariano Suassuna", 1955);
    console.log(livroValido);
} catch (erro) {
    console.error(`Erro ao criar livro: ${erro.message}`);
}

try {
    const livroInvalido = new Livro("", "J.K. Rowling", 2000);
    console.log(livroInvalido);
} catch (erro) {
    console.error(`Erro ao criar livro: ${erro.message}`);
}

try {
    const livroAnoFuturo = new Livro("O Hobbit", "J.R.R. Tolkien", 2050);
    console.log(livroAnoFuturo);
} catch (erro) {
    console.error(`Erro ao criar livro: ${erro.message}`);
}

try {
    const livroAutorInvalido = new Livro("O Senhor dos Anéis", null, 1954);
    console.log(livroAutorInvalido);
} catch (erro) {
    console.error(`Erro ao criar livro: ${erro.message}`);
}