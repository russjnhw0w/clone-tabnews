import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>EngineDev | Soluções Digitais</title>
        <meta
          name="description"
          content="Transformamos ideias em soluções digitais sob medida para impulsionar seu negócio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Meta tags opcionais para SEO e compartilhamento */}
        <meta
          property="og:title"
          content="Engine Development| Soluções Digitais"
        />
        <meta
          property="og:description"
          content="Transformamos ideias em soluções digitais sob medida para seu negócio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.enginedev.com.br" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Transformamos ideias em{" "}
              <span className={styles.highlight}>soluções digitais</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Desenvolvemos experiências digitais sob medida para impulsionar
              seu negócio
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                Começar projeto <FiArrowRight />
              </button>
              <button className={styles.secondaryButton}>
                Explorar portfólio
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              <video autoPlay muted loop playsInline className={styles.video}>
                <source src="/videos/background.mp4" type="video/mp4" />
                {/* Mensagem de fallback se o vídeo não carregar */}
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </section>

        {/* Destaques Section */}
        <section className={styles.features}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>
              Por que nos escolher?
            </span>
            <h2 className={styles.sectionTitle}>
              Soluções que fazem a diferença
            </h2>
          </div>

          <div className={styles.featuresGrid}>
            {[
              {
                title: "Design Impactante",
                description: "Interfaces que cativam e convertem",
              },
              {
                title: "Tecnologia Moderna",
                description: "Stack atualizada para performance",
              },
              {
                title: "SEO Integrado",
                description: "Visibilidade desde o primeiro dia",
              },
              {
                title: "Suporte Contínuo",
                description: "Acompanhamento pós-entrega",
              },
            ].map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FiCheck className={styles.checkIcon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Pronto para elevar seu negócio digital?</h2>
            <p>Agende uma conversa sem compromisso com nosso time</p>
            <button className={styles.ctaButton}>
              Agendar consulta <FiArrowRight />
            </button>
          </div>
        </section>

        <footer className={styles.footer}>
          {/* Seção 1: Navegação Básica */}
          <div className={styles.footerColumns}>
            {/* Coluna 1 - Navegação */}
            <div className={styles.footerSection}>
              <h3>✌️ Navegar</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/sobre">Quem Somos</a>
                </li>

                <li>
                  <a href="/contato">Portfólios</a>
                </li>
              </ul>
            </div>

            {/* Coluna 2 - Soluções (Adapte aos seus serviços reais) */}
            <div className={styles.footerSection}>
              <h3>🛠️ Nossas Soluções</h3>
              <ul>
                <li>
                  <a href="/sistema-web">Sistemas Web</a>
                </li>
                <li>
                  <a href="/aplicativos">Aplicativos</a>
                </li>
                <li>
                  <a href="/consultoria">Consultoria Tech</a>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Contato Simples */}
            <div className={styles.footerSection}>
              <h3>📞 Contato</h3>
              <p>contato@enginedev.com</p>
              <p>(11) 98697-5940</p>
              <div className={styles.socialIcons}>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
                <a
                  href="https://wa.me/5511986975940"
                  className={styles.whatsappButton}
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            <div className={styles.newsletterBox}>
              <h4>Receba nossas atualizações</h4>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className={styles.newsletterInput}
                  required
                />
                <button type="submit" className={styles.newsletterButton}>
                  <FaPaperPlane className={styles.buttonIcon} /> Assinar
                </button>
              </form>
            </div>
          </div>

          {/* Seção 2 - Direitos Autorais + Selo Simples */}
          <div className={styles.footerBottom}>
            <p>
              © {new Date().getFullYear()} Engine Development - Todos os
              direitos reservados
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
