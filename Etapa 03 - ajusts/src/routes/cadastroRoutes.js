import { Router } from "express";
import Aluno from "./Aluno.js";

const cadastroRoutes = Router();

// Array em memória para armazenar os alunos
const alunos = [];

// GET - Listar todos os alunos
cadastroRoutes.get("/listar", (req, res) => {
    res.status(200).json(alunos);
});

// POST - Adicionar um novo aluno
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

// PUT - Atualizar dados de um aluno existente
cadastroRoutes.put("/atualizar/:senha", (req, res) => {
    try {
        const senha = req.params.senha; // Buscar aluno pela senha
        const aluno = alunos.find((aluno) => aluno.pegarSenha() === senha);

        if (!aluno) {
            return res.status(404).json({ message: "Aluno não encontrado!" });
        }

        // Validação de campos no body usando métodos da classe Aluno
        const { grupo, nome, apelido, senha: novaSenha } = req.body;
        if (grupo) Aluno.prototype.validarGrupo(grupo);
        if (nome) Aluno.prototype.validarNome(nome);
        if (apelido) Aluno.prototype.validarApelidoNaoNulo(apelido);
        if (novaSenha) Aluno.prototype.validarSenha(novaSenha);

        // Atualiza os campos
        aluno.atualizarCampos(req.body);

        res.status(200).json({ message: "Aluno atualizado com sucesso!", aluno });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE - Remover um aluno pela senha
cadastroRoutes.delete("/remover/:senha", (req, res) => {
    const senha = req.params.senha; // Buscar aluno pela senha
    const index = alunos.findIndex((aluno) => aluno.pegarSenha() === senha);

    if (index === -1) {
        return res.status(404).json({ message: "Aluno não encontrado!" });
    }

    alunos.splice(index, 1); // Remove o aluno da lista
    res.status(200).json({ message: "Aluno removido com sucesso!" });
});

export default cadastroRoutes;
