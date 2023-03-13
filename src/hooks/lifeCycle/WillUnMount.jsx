/**
 * example of willUnMount for class component
 * and for a functional component
 */
import React, { Component, useEffect } from 'react';

//class component
export class WillUnMount extends Component {
    
    componentWillUnmount(){
        console.log('This happens before the component dissapears');
    }
    
    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}

//functional component
export const WillUnMountHook = () => {

    useEffect(() => {
        
        return () => {
        console.log('This happens before the component dissapears');
            
        };
    }, []); //los corchetes en blanco para que esto se ejecute una sola vez

    return (
        <div>
            
        </div>
    );
}