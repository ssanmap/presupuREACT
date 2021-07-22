import React from 'react';
import {revisarPresupuesto} from '../helpers';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <div>
            <div className="alert alert-primary">
            Presupuesto: ${presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
            Restante: $ {restante}
            </div>
        </div>
    )
}

export default ControlPresupuesto
