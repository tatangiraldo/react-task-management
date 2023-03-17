import React, {useState} from 'react';
import Child from '../pure/child';

export const Father = () => {

    const [parentProperty1, setParentProperty1] = useState('property 1');
    const [parentPropery2, setParentPropery2] = useState('property 2');

    function somethingIniParent(text){
        setParentProperty1(text)
        console.log(`Data received from child: ${text} ` )
    }

    function updateparentPropery2(newData){
        setParentPropery2(newData);
    }

    return (
        <div style={{border:'solid 1px red'}}>
            <p>I'm the father</p>
            <br />
            <span>Parent Property 1 (OneBinding): <b> {parentProperty1} </b></span>
            <br/>
            <span>Parent Property 2: (TwoBinding) <b> {parentPropery2} </b></span>
            <Child 
                dataFromParent={parentPropery2}
                functionInParent={somethingIniParent}
                sendDataToParent={updateparentPropery2}
                />
        </div>
    );
}
