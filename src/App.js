import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Pregunta from "./components/Pregunta";

function App() {
  let nombre = [{ nombre: "seba" }, { nombre: "pepe" }];
  const [presupuesto, setpresupuesto] = useState(0);
  const [restante, setrestante] = useState(0);
  const [pregunta, setpregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>
      </header>
      <div className="contenido-principal contenido">
        {pregunta ?    (<Pregunta
          nombre={nombre}
          setpresupuesto={setpresupuesto}
          setrestante={setrestante}
          setpregunta={setpregunta}
        />) :
        (
          <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">2</div>
        </div>
        )
        }
     

      
      </div>
    </div>
  );
}

export default App;
