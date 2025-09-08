// src/components/Header.jsx
import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>Hi, I'm Gauri 👋</h1>
        <h2 style={styles.subtitle}>Future Software Engineer 🚀</h2>
        <p style={styles.text}>
          Welcome to my portfolio! Here you can explore my projects, skills, and journey
          in tech.
        </p>
      </div>
    </header>
  );
}

// Inline styles (you can later move to CSS file)
const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "60px 20px",
    textAlign: "center",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    fontWeight: "400",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
  },
};

export default Header;
