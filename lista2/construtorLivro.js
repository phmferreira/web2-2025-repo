/**
 * Construtor para Livro, validando seus atributos no construtor.
 */

/**
 * Construtor da classe Livro.
 * @param {string} titulo - O título do livro.
 * @param {string} autor - O autor do livro.
 * @param {number} anoPublicacao - O ano de publicação do livro.
 * @throws {Error} Se o título for vazio, se o autor for vazio ou se o ano de publicação for inválido.
 */
function Livro(titulo, autor, anoPublicacao) {
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

// --- Exemplos de uso do construtor Livro ---

console.log("--- Exemplo Válido ---");
try {
    const livroValido = new Livro("Auto da Compadecida", "Ariano Suassuna", 1955);
    console.log(`Livro criado com sucesso: ${livroValido.titulo}`);
    console.log(livroValido);
} catch (erro) {
    console.error(`Erro ao criar livro: ${erro.message}`);
}

console.log("\n--- Exemplo Inválido (Título Vazio) ---");
try {
    const livroNomeInvalido = new Livro("", "Autor Desconhecido", 2020);
    console.log(livroNomeInvalido);
} catch (erro) {
    console.error(`Erro ao criar livro: ${erro.message}`);
}

console.log("\n--- Exemplo Inválido (Ano Futuro) ---");
try {
    const livroAnoInvalido = new Livro("Livro do Futuro", "Autor Genérico", 2030);
    console.log(livroAnoInvalido);
} catch (erro) {
    console.error(`Erro ao criar livro: ${erro.message}`);
}

console.log("\n--- Exemplo Inválido (Autor Inválido) ---");
try {
    const livroAutorInvalido = new Livro("Livro Sem Autor", null, 2018);
    console.log(livroAutorInvalido);
} catch (erro) {
    console.error(`Erro ao criar livro: ${erro.message}`);
}
