import React, {useState, useEffect} from 'react';

export default function ClockF() {

    const data = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        ejecutado: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };
    
    const [state, setState] = useState(data);
    //const [counter, setCounter] = useState(0);

    const tick = () => {
        let ejecutado = state.ejecutado + 1
        console.log(ejecutado);
        //setCounter(counter + 1)    
        setState({
            ...state,
            fecha: new Date(),
            ejecutado
        })
    }

    useEffect(() => {
        setTimeout(() => {
            tick();           
        }, 1000);
    }, [state]);

    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>ejecutado: {state.ejecutado}</h1>
        </div>
    );
}
