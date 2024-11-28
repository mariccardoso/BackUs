import { Router } from "express";

const cadastroRoutes = Router();

cadastroRoutes.post("/adicionar", (req, res) => {
    try {
        const { grupo, nome, apelido, senha } = req.body;

        // Validações usando métodos da classe Aluno
        const grupoValido = Aluno.prototype.validarGrupo(grupo);
        const nomeValido = Aluno.prototype.validarNome(nome);
        const apelidoValido = Aluno.prototype.validarApelidoNaoNulo(apelido);
        const senhaValida = Aluno.prototype.validarSenha(senha);

        // Verificar se já existe um aluno com a mesma senha
        const alunoExistente = alunos.find((aluno) => aluno.pegarSenha() === senhaValida);
        if (alunoExistente) {
            return res.status(409).json({ message: "Já existe um aluno com essa senha!" });
        }

        const novoAluno = new Aluno(grupoValido, nomeValido, apelidoValido, senhaValida);
        alunos.push(novoAluno);

        res.status(201).json({ message: "Aluno adicionado com sucesso!", aluno: novoAluno });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

cadastroRoutes.get("/listar", (req, res) => {

});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;