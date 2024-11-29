import React from "react";
import Table from "./components/Table";
import "./styles/App.css";

function App() {
  return (
    <>
      <header className="app-header">
        <h1>Bienvenidos</h1>
        <h3>TP-FINAL-HIA</h3>
      </header>
      <main className="app-main">
        <p>
          Tito Benjamin, Marcelo Ignacio Rodriguez, Anachuri Nicolas, Alejo Bolanho
        </p>
        <Table />
      </main>
      <footer className="app-footer">
        <p>© 2024 Proyecto Final HIA - Tito Benjamin, Marcelo Ignacio Rodriguez, Anachuri Nicolas, Alejo Bolanho</p>
        <p>Creado con 💻 y ☕</p>
      </footer>
    </>
  );
}

export default App;
