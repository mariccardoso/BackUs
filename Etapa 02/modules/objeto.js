
// Importando a classe Aluno
import Aluno from "./Aluno.js";


// Testando os métodos da classe Aluno:

const mariana = new Aluno( 1, "Mariana", "Mari", "1n234");

// Testando os métodos da classe Aluno

// Testando o método validarNome
console.log(mariana.validarNome("Mariana")); // verdadeiro
console.log(mariana.validarNome("Mariana123")); // falso

// Testando o método validarGrupo
console.log(mariana.validarGrupo(1)); // verdadeiro
console.log(mariana.validarGrupo(7)); // falso

// Testando o método validarApelidoNaoNulo
console.log(mariana.validarApelidoNaoNulo("Mari")); // verdadeiro
console.log(mariana.validarApelidoNaoNulo(null)); // falso

// Testando o método validarSenha
console.log(mariana.validarSenha("1n234")); // verdadeiro
console.log(mariana.validarSenha("1234")); // falso

// Testando o método atualizarCampos
mariana.atualizarCampos(2, "Mariana", "Mari", "1n234");

