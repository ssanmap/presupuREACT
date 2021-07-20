import React from "react";
import Pregunta from "./components/Pregunta";

function App() {
  let nombre = [{ nombre: 'seba'}, {nombre: 'pepe'}];
  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>
      </header>
      <div className="contenido-principal contenido">
        <Pregunta nombre={nombre} />
      </div>
    </div>
  );
}

export default App;
