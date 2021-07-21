import React, { useState } from "react";
import Error from "./Error";

const Pregunta = ({ nombre, setrestante, setpresupuesto, setpregunta }) => {
  const [cantidad, setcantidad] = useState(0);
  // error
  const [error, seterror] = useState(false);
  // leer presupuesto
  const definirPresu = (e) => {
    setcantidad(parseInt(e.target.value, 10));
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      seterror(true);

      return;
    } else {
      seterror(false);
      setrestante(cantidad);
      setpresupuesto(cantidad);
      setpregunta(false);
    }
  };
  return (
      
    <div>
      <h3>Favor inserta tu {nombre.map((n) => n.nombre)}</h3>

      {error ? <Error mensaje="El Presupuesto es Incorrecto "/> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          id=""
          placeholder="Coloca tu presupuesto"
          onChange={definirPresu}
        />
        <input
          type="button"
          value="Definir Presupuesto"
          className="button-primary u-full-width"
        />
      </form>
    </div>
  );
};

export default Pregunta;
