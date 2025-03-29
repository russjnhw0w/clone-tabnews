import React from "react";
import { useRouter } from "next/router"; // Importe o useRouter do Next.js
import styles from "./loginCard.module.css";

const Card = () => {
  const router = useRouter(); // Hook para redirecionar

  const handleCadastroClick = () => {
    router.push("/Cadastro"); // Redireciona para a página de cadastro
  };

  const handleQuemSomosClick = () => {
    router.push("/QuemSomos"); // Redireciona para a página "Quem Somos"
  };

  const handleServicosClick = () => {
    router.push("/Servicos"); // Redireciona para a página "Serviços"
  };

  return (
    <>
      <button className={styles.button} onClick={handleCadastroClick}>
        Login
      </button>
      <button className={styles.button} onClick={handleQuemSomosClick}>
        Quem somos
      </button>
      <button className={styles.button} onClick={handleServicosClick}>
        Serviços
      </button>
    </>
  );
};
const LoginCard = () => {
  return (
    <div className={styles.container}>
      {/* Vídeo de fundo */}
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src="/videos/background.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <h1 className={styles.title}>ENGINE DEVELOPMENT</h1>
      <Card />
    </div>
  );
};

export default LoginCard;
