import { Router } from "express";

const cadastroRoutes = Router();

cadastroRoutes.post("/adicionar", (req, res) => {

});

cadastroRoutes.get("/listar", (req, res) => {

});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {
    const senha = req.params.senha; // Buscar aluno pela senha
    const index = alunos.findIndex((aluno) => aluno.pegarSenha() === senha);

    if (index === -1) {
        return res.status(404).json({ message: "Aluno não encontrado!" });
    }

    alunos.splice(index, 1); // Remove o aluno da lista
    res.status(200).json({ message: "Aluno removido com sucesso!" });
});

export default cadastroRoutes;