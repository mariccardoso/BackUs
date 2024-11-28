import { Router } from "express";
import Aluno from "../modules/Aluno.js";

const cadastroRoutes = Router();

// Array em memória para armazenar os alunos
const alunos = [];

// GET - Listar todos os alunos
cadastroRoutes.get("/listar", (req, res) => {

});

// POST - Adicionar um novo aluno
cadastroRoutes.post("/adicionar", (req, res) => {
    
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
    
});

export default cadastroRoutes;
