import React from "react";
import { useRouter } from "next/router"; // Importe o useRouter do Next.js
import styles from "./loginCard.module.css";

const Card = () => {
  const router = useRouter(); // Hook para redirecionar

  const handleCadastroClick = () => {
    router.push("/Cadastro"); // Redireciona para a página de cadastro
  };

  return (
    <button className={styles.button} onClick={handleCadastroClick}>
      Registre-se
    </button>
  );
};

const LoginCard = () => {
  return (
    <div>
      <h1>Login Card</h1>
      <Card />
    </div>
  );
};

export default LoginCard;
