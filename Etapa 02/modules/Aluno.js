class Aluno {
    #senha; // atributo privado
    /**
     * @param {number} grupo // Grupo do aluno.
     * @param {string} nome // Nome do aluno.
     * @param {string} apelido // Apelido do aluno.
     * @param {string} senha // Senha do aluno.
     */
    constructor(grupo, nome, apelido, senha) {

        this.grupo = grupo; 
        this.nome = nome;
        this.apelido = apelido;
        this.#senha = senha; // senha como atributo privado
        this.estaVivo = true; // todos os alunos começam vivos
        this.localAtual = "Portaria do SENAI"; // todos os alunos começam na portaria
        this.tempoDesocupado = null; // todos os alunos começam ocupados
    }

    validarNome(nome){
        // Verifica se o nome é uma string e se contém apenas letras e espaços
        if (typeof nome === "string" && /^[A-Za-z\s]+$/.test(nome)) {
            return true;
        }
        return false; 
    }

    validarGrupo(grupo){
        // Verifica se o grupo é um número inteiro entre 1 e 6
        if (typeof grupo === "number" && grupo >= 1 && grupo <= 6) {
            return true;
        }
        return false; 
    }

    validarApelidoNaoNulo(apelido){
        // Verifica se o apelido é uma string e se não é null
        if (apelido !== null) {
            return true;
        }
        return false; 
    }

    validarSenha(senha) {
        // Verifica se a senha é uma string e se contém ao menos uma letra e um número
        if (typeof senha === "string" && /[A-Za-z]/.test(senha) && /\d/.test(senha)) {
            return true;
        }
        return false; 
    }

    atualizarCampos(grupo, nome, apelido, senha) {
        // Atualiza os campos do aluno
        if (this.validarGrupo(grupo)) {
            this.grupo = grupo;
        }
        if (this.validarNome(nome)) {
            this.nome = nome;
        }
        if (this.validarApelidoNaoNulo(apelido)) {
            this.apelido = apelido;
        }
        if (this.validarSenha(senha)) {
            this.#senha = senha;
        }
    }

    pegarSenha(){
        // Retorna a senha do aluno
        return this.#senha;
    }
}

export default Aluno; // Exporta a classe Aluno