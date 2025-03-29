import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { FiCalendar, FiArrowRight, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  // Efeitos para tema
  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const savedTheme = localStorage.getItem("theme") || preferredTheme;
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Efeito para scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Itens de navegação divididos em grupos
  const leftItems = [
    { path: "/", label: "Home" },
    { path: "/quem-somos", label: "Quem Somos" },
  ];

  const rightItems = [
    { path: "/servicos", label: "Serviços" },
    { path: "/portfolio", label: "Portfólios" },
  ];

  // Itens CTA
  const ctaItems = [
    { path: "/contato", label: "Fale Conosco", isCta: true },
    { path: "/demo", label: "Agendar Demo", isPrimaryCta: true },
  ];

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${theme === "light" ? styles.light : ""}`}
      >
        <div className={styles.navContainer}>
          {/* Grupo Esquerdo - Mantido organizado */}
          <div className={styles.navGroup}>
            {leftItems.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                isActive={router.pathname === item.path}
              />
            ))}
          </div>

          {/* Grupo Direito - Reorganizado para melhor espaçamento */}
          <div className={`${styles.navGroup} ${styles.rightGroup}`}>
            {rightItems.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                isActive={router.pathname === item.path}
              />
            ))}

            {/* Separador visual apenas em desktop */}
            <div className={styles.navDivider}></div>

            {/* CTAs com espaçamento adequado */}
            <div className={styles.ctaGroup}>
              {ctaItems.map((item) => (
                <NavItem
                  key={item.path}
                  item={item}
                  isCta={item.isCta}
                  isPrimaryCta={item.isPrimaryCta}
                />
              ))}
            </div>

            {/* Toggle de tema - Posição corrigida */}
            <div className={styles.themeToggleWrapper}>
              <div className={styles.themeToggleContainer}>
                <FiSun size={16} className={styles.themeIcon} />
                <button
                  className={`${styles.themeToggle} ${
                    theme === "dark" ? styles.themeToggleDark : ""
                  }`}
                  onClick={toggleTheme}
                  aria-label={`Alternar para tema ${theme === "dark" ? "claro" : "escuro"}`}
                >
                  <span className={styles.toggleThumb} />
                </button>
                <FiMoon size={16} className={styles.themeIcon} />
              </div>
            </div>
          </div>

          {/* Botão Mobile */}
          <button
            className={styles.menuTrigger}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className={styles.menuDash} />
          </button>
        </div>
      </nav>

      {/* Menu Mobile - Mantido funcional */}
      <div className={`${styles.navMobile} ${isOpen ? styles.mobileOpen : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="Fechar menu"
        >
          &times;
        </button>

        {[...leftItems, ...rightItems].map((item) => (
          <NavItem
            key={item.path}
            item={item}
            mobile
            onClick={() => setIsOpen(false)}
            isActive={router.pathname === item.path}
          />
        ))}

        <div className={styles.mobileCtas}>
          {ctaItems.map((item) => (
            <NavItem
              key={item.path}
              item={item}
              mobile
              isCta={item.isCta}
              isPrimaryCta={item.isPrimaryCta}
              onClick={() => setIsOpen(false)}
            />
          ))}

          <div className={styles.mobileThemeToggle}>
            <button onClick={toggleTheme} className={styles.mobileThemeButton}>
              {theme === "dark" ? (
                <>
                  <FiSun size={20} /> Modo Claro
                </>
              ) : (
                <>
                  <FiMoon size={20} /> Modo Escuro
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Componente NavItem - Atualizado mas mantendo a estrutura original
const NavItem = ({
  item,
  isCta = false,
  isPrimaryCta = false,
  mobile = false,
  isActive = false,
  onClick,
}) => {
  if (mobile) {
    return (
      <Link
        href={item.path}
        className={`
          ${styles.mobileLink} 
          ${isCta ? styles.mobileCta : ""}
          ${isPrimaryCta ? styles.mobilePrimaryCta : ""}
          ${isActive ? styles.mobileActive : ""}
        `}
        onClick={onClick}
      >
        {item.label}
        {isPrimaryCta && <FiArrowRight className={styles.ctaIcon} />}
      </Link>
    );
  }

  if (isPrimaryCta) {
    return (
      <Link href={item.path} className={styles.primaryCta} onClick={onClick}>
        {item.label}
        <FiCalendar className={styles.ctaIcon} />
      </Link>
    );
  }

  if (isCta) {
    return (
      <Link href={item.path} className={styles.ctaButton} onClick={onClick}>
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      href={item.path}
      className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
      onClick={onClick}
    >
      {item.label}
      <span
        className={`${styles.linkUnderline} ${isActive ? styles.underlineActive : ""}`}
      />
    </Link>
  );
};
