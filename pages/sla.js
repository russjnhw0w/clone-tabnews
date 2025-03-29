import React from "react";
import styles from "../styles/login.module.css";
import LoginCard from "../src/components/LoginCard/LoginCard";

export default function LoginPage() {
  return React.createElement(
    "div",
    { className: styles.background },
    React.createElement(LoginCard)
  );
}

function Home() {
  return <h1>Home </h1>;
}
