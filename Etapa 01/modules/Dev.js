import { Jogador } from './Jogador.js';

class Dev extends Jogador {
    constructor(nome, posicao) {
        super(nome, posicao);
        this.tarefasConcluidas = 0;
    }

    realizarTarefa(tarefa) {
    }
}