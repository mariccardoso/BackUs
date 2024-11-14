class Jogador {
    constructor(nome, nickname, posicao) {
      this.nome = nome;
      this.nickname = nickname; // Nickname do jogador no jogo  
      this.posicao = posicao; // Posição atual do jogador no mapa do SENAI
      this.vivo = true; // Indica se o jogador está vivo ou morto
    }
  
    mover(novaPosicao) {
    }

    votar() {
    }
  
    reportarCorpo() {
    }
  }

  module.exports = Jogador; // Exporta a classe Jogador para que possa ser utilizada em outros arquivos