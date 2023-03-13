/**
 * Example of DidMount methpod
 * cycle life in a class component
 * and cycle life in a functional component
 */
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Before component will be render in DOM')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {
    
    useEffect(() => {
        console.log('Before component will be render in DOM')        
        
        
    }, []);//Los corchetes aseguran que se ejecute solo una vez

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}


