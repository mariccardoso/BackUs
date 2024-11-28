class Aluno {
    #senha;
    constructor(grupo, nome, apelido, senha) {
        this.grupo = this.validarGrupo(grupo);
        this.nome = this.validarNome(nome);
        this.apelido = this.validarApelidoNaoNulo(apelido);
        this.#senha = this.validarSenha(senha);
        this.estaVivo = true;
        this.localAtual = "Portaria do SENAI";
    }

    validarNome(nome) {
        // Se o nome não for uma string ou conter números, lançar um erro
        if (!nome || typeof nome !== "string" || nome.match(/[^a-zA-Z]/)) {
            // "Throw" é uma palavra-chave que lança um erro
            throw new Error( 
                "Campo --nome-- inválido. Ele deve ser uma string e não conter números!"
            );
        }
        return nome;
    }

    validarGrupo(grupo) {
        // Se o grupo não for um número inteiro ou não estiver entre 1 e 6, lançar um erro
        if (!Number.isInteger(grupo) || grupo < 1 || grupo > 6) {
            // "Throw" é uma palavra-chave que lança um erro
            throw new Error(
                "Campo --grupo-- é obrigatório e deve ser um número de 1 a 6!"
            );
        }
        return grupo;
    }

    validarApelidoNaoNulo(apelido) {
        // Se o apelido for nulo, lançar um erro
        if (!apelido) {
            // "Throw" é uma palavra-chave que lança um erro
            throw new Error("Campo --apelido-- é obrigatório!");
        }
        return apelido;
    }

    validarSenha(senha) {
        // Se a senha não for uma string ou conter caracteres especiais, lançar um erro
        if (!senha || typeof senha !== "string" || senha.match(/[^a-zA-Z0-9]/)) {
            // "Throw" é uma palavra-chave que lança um erro
            throw new Error(
                "Campo --senha-- é obrigatório! Ela deve ser uma string podendo ter dígitos e letras."
            );
        }
        return senha;
    }

    atualizarCampos({ grupo, nome, apelido, senha }) {
        if (grupo) {
            this.grupo = this.validarGrupo(grupo); // Se o grupo for passado, validar o grupo
        }
        if (nome) {
            this.nome = this.validarNome(nome); // Se o nome for passado, validar o nome
        }
        if (apelido) {
            this.apelido = this.validarApelidoNaoNulo(apelido); // Se o apelido for passado, validar o apelido
        }
        if (senha) {
            this.#senha = this.validarSenha(senha); // Se a senha for passada, validar a senha
        }
    }

    pegarSenha() {
        return this.#senha;
    }
}

export default Aluno;