/*
Example about useState
*/
import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Initial values;
    const initValue = 0;
    const initValuePerson = {
        name: 'MART',
        email: 'mail@jama.co'
    }

    const [counter, setcounter] = useState(initValue);
    const [valuePerson, setvaluePerson] = useState(initValuePerson);


    function increasentCounter(){
        setcounter(counter + 1);
    }

    function increasePerson(){
        setvaluePerson({
            name: 'New person',
            email: 'newMail@hh.oo'
        });
    }

    return (
        <div>
            <h1>useState: </h1>
            <h2>counter: {counter}</h2>
            <h3>person: {valuePerson.name}</h3>
            <h4>email: {valuePerson.email}</h4>
            <hr/>
            <button onClick={increasentCounter}>+ Counter</button>
            <button onClick={increasePerson}>+ Person</button>
        </div>
    );
}

export default Ejemplo1;
