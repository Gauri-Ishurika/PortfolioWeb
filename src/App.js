// App.js
import React from "react";
import "./App.css";

function App() {
  const cards = [
    {
  id: "intro",
  title: "Hi, I'm Gauri Ishurika.",
  content: (
    <div className="intro-container">
      {/* Left side text */}
      <div className="intro-text">
        <h3 className="intro-heading">Future Software Engineer</h3>
        <p>
          I am an undergraduate in Computing and Information Systems with a
          strong interest in technology and software development.
        </p>
      </div>

      {/* Right side image */}
      <div className="intro-image">
        <img
          src="/profile.jpg"
          alt="Profile"
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #ffffff",
          }}
        />
      </div>
    </div>
  ),
},

    {
      id: "about",
      title: "About Me.",
      content: (
        <ul>
          <li>“I am Gauri, an aspiring software engineer from Sri Lanka, currently pursuing a degree in Computing and Information Systems. With strong interests in programming, web development, and cybersecurity, I am committed to continuous learning and innovation. I strive to create practical, efficient solutions while expanding my technical expertise.”</li>
        </ul>
      ),
    },
    {
  id: "skills",
  title: "Skills",
  content: (
    <div className="tech-stack">
      <div className="tech-group">
        <h3>Languages</h3>
        <div className="icons">
          <img src="/tech/c.png" alt="C" />
          <img src="/tech/java.png" alt="Java" />
          <img src="/tech/html.png" alt="HTML" />
          <img src="/tech/css.png" alt="CSS" />
          <img src="/tech/react.png" alt="React" />
        </div>
      </div>

      <div className="tech-group">
        <h3>Databases</h3>
        <div className="icons">
          <img src="/tech/mysql.png" alt="MySQL" />
        </div>
      </div>

      <div className="tech-group">
        <h3>Tools</h3>
        <div className="icons">
          <img src="/tech/git.png" alt="Git" />
          <img src="/tech/github.png" alt="GitHub" />
        </div>
      </div>
    </div>
  ),
},

    {
  id: "contact",
  title: "Connect with Me.",
  content: (
    <div className="contact-icons">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/linkedin.png" alt="LinkedIn" />
        LinkedIn
      </a>
      <a href="mailto:gauriishurika@gmail.com">
        <img src="/icons/email.png" alt="Email" />
        Email
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/github.png" alt="GitHub" />
        GitHub
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61565563962324"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/facebook.png" alt="Facebook" />
        Facebook
      </a>
    </div>
  ),
},
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Gauri Ishurika</h1>
        <nav className="navbar">
          <ul className="nav-links">
            {cards.map((card) => (
              <li key={card.id}>
                <a href={`#${card.id}`}>{card.title.split(" ")[0]}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Stacked Scrollable Sections */}
      <main className="content">
        {cards.map((card) => (
          <section
            key={card.id}
            id={card.id}
            className={`card card-${card.id}`}
          >
            <h2>{card.title}</h2>
            {card.content}
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Gauri Ishurika | All Right  Reserved</p>
        <div className="footer-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="mailto:gauriishurika@gmail.com">
              <img src="/icons/email.png" alt="Email" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.png" alt="GitHub" />
            </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
