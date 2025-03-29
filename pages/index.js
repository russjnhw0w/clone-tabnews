import React from "react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("teste");

    // Configuração do botão principal
    const button = document.getElementById("button");
    if (button) {
      button.addEventListener("click", function () {
        alert("Deseja Realmente entrar?");
        console.log('Clicou no botão "OK!"');
      });
    }

    // Configuração do botão "Esqueceu a senha" (corrigido o nome da variável)
    const esqueceuSenha = document.getElementById("esqueceuSenha");
    if (esqueceuSenha) {
      esqueceuSenha.addEventListener("click", function () {
        alert("Esqueceu a senha? Clique aqui!");
        console.log('Clicou no botão "OK!"');
      });
    }

    // Funcionalidade para mostrar/ocultar senha
    const togglePassword = document.querySelector(".toggle-password");
    if (togglePassword) {
      togglePassword.addEventListener("click", function () {
        const input = document.querySelector('input[type="password"]');
        if (input) {
          const type =
            input.getAttribute("type") === "password" ? "text" : "password";
          input.setAttribute("type", type);
        }
      });
    }
  }, []); // O array vazio faz com que execute apenas uma vez ao carregar

  // Função para o alerta de cadastro
  const handleRegistration = () => {
    /*
    const nomeCompleto = prompt("Insira seu nome completo!");
    const email = prompt("Insira o seu Email");
    const login = prompt("Insira seu login");
    const senha = prompt("Insira sua senha");
    const senha2 = prompt("Insira a confirmação da sua senha");
    */
    alert("Agora que você efetuou o cadastro, faça o seu login");
  };

  return (
    <div>
      {/* Elementos da sua página */}
      <button id="button">Entrar</button>
      <button id="esqueceuSenha">Esqueceu a senha?</button>
      <button onClick={handleRegistration}>Cadastrar</button>

      {/* Exemplo do campo de senha */}
      <div>
        <input type="password" placeholder="Senha" />
        <button className="toggle-password">Mostrar/Ocultar</button>
      </div>
    </div>
  );
}
