import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  let nombre = [{ nombre: "seba" }, { nombre: "pepe" }];
  
  const [presupuesto, setpresupuesto] = useState(0);
  const [restante, setrestante] = useState(0);
  const [pregunta, setpregunta] = useState(true);
  const [gastos, setgastos] = useState([]);
  const [gasto, setgasto] = useState({});
  const [creargasto, setcreargasto] = useState(false)
  // cuando agregamos un nuevo gasto

  useEffect(() => {
    if (creargasto) {
      setgastos([
        ...gastos,
        gasto
      ]);
    // resta
        const presuRestante = restante - gasto.cantidad;
        setrestante(presuRestante);

      setcreargasto(false);
    }
    
  }, [gasto, creargasto, gastos, restante]);
  // const agregarNewGasto = (gasto) => {
  //   setgastos([
  //     ...gastos,
  //     gasto
  //   ])
  // }

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
            <Formulario 
              setgasto={setgasto}
              setcreargasto={setcreargasto}
            />
          </div>
          <div className="one-half column">
          <Listado gastos={gastos} />     
          <ControlPresupuesto 
            presupuesto={presupuesto}
            restante={restante}
          />     
              </div>
        </div>
        )
        }
     

      
      </div>
    </div>
  );
}

export default App;
