import { Router } from "express";

const cadastroRoutes = Router();

cadastroRoutes.post("/adicionar", (req, res) => {

});


// Get - Listar todos os alunos
cadastroRoutes.get("/listar", (req, res) => {
    res.status(200).send(alunos);
});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;