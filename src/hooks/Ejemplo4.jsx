// Example to know how to use props.children 
// To pass html elements
import React from 'react';

const ComponentWithChildren = (props) => {
    return (
        <div>
            <h1>Example of children props</h1>
            <h2>
                Name: {props.nombre}
            </h2>
            {
                /*
                props.children by default is going to paint everything
                between open tag and close tag of this component from
                the parent component
                */
            }
            {props.children}
        </div>
    );
}

export default ComponentWithChildren;
