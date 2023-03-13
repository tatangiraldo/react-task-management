/**
 * example of DidUpdate 
 * in a classs component and a 
 * hook component (functional)
 */
import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('When the component receive ' +
            'new hooks or changes in its provate state');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('');
  
        //sin corchetes para que no tenga limite
        //cada vez que haya un cambio en el estado
        //o en los props
    });

    return (
        <div>
        <h1>DidUpdate</h1>
    </div>
    );
}

