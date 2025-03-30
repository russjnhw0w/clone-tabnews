import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { FiArrowRight, FiCheck } from "react-icons/fi";

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
          content="Nome da Sua Empresa | Soluções Digitais"
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
            <div className={styles.imagePlaceholder}></div>
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
      </main>
    </>
  );
}
