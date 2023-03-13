import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //useState manage:
    //const [propiedad, metodo que la actualiza] = useState(val inicial);
    const [age, setage] = useState(32);

    const birthday = () => {
        //actualiza el State
        setage(age + 1);
    }

    return (
        <div>
        <h1>
            Hi {props.name}
        </h1>
       <h2>Edad: {age}</h2> 
        <div>
            <button onClick={birthday}>
                Click
            </button>
        </div>
    </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
