import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({setgasto, setcreargasto}) => {
    const [nombre, setnombre] = useState('');
    const [cantidad, setcantidad] = useState(0);
    const [error, seterror] = useState(false);

    const agregarGasto = (e) => {
        e.preventDefault();
        // valudar
        if(cantidad <1 || isNaN(cantidad) || nombre.trim() === ''){
            seterror(true);
            return;
        }
        seterror(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        // console.log(gasto);
        setgasto(gasto);
        setcreargasto(true);
        setnombre('');
        setcantidad(0);
    }
    return (
        
        <div>
            <form onSubmit={agregarGasto}>
                <h2>Agrega Aqui tus gastos</h2>

                { error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
                <div className="campo">
                    <label htmlFor="gasto">Nombre Gasto</label>
                    <input type="text" 
                    className="u-full-width" 
                    placeholder="Ej: Luz"
                    id="" 
                    value={nombre}
                    onChange={ e => setnombre(e.target.value) }
                    />
                </div>
                <div className="campo">
                    <label htmlFor="gasto">Cantidad Gasto</label>
                    <input type="number" 
                    className="u-full-width" 
                    placeholder="Ej: 30.000"
                    value={cantidad}
                    onChange={ e => setcantidad( parseInt(e.target.value, 10) ) }
                    id="" 
                    />
                </div>
                <input type="submit"  className="button-primary u-full-width" value="Agregar Gasto" />
            </form>
        </div>
    )
}

export default Formulario
