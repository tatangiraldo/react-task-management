/*
Examples of
     useState()
     useContext()
*/
import React, {useState, useContext} from 'react';

const myGeneralContext = React.createContext(null);

//Component 1 has a context that is going to have 
//a value that it receives from the parent
const Component1 = () => {
    
    //Initialize a empy state that will be filled 
    //with its parent's data
    const componentContext = useContext(myGeneralContext);
    
    return (
        <div>
            <h1> The token is: {componentContext.token} </h1>
            <Component2/>
        </div>
    );
}

const Component2 = () => {
    
    const componentContext = useContext(myGeneralContext)
    
    return (
        <div>
            <h2>Session is: {componentContext.sesion}</h2>
        </div>
    );
}

export default function ComponentWithContext() {
    
    const initialState = {
        token: '1234567',
        sesion: 1
    }
    
    //create state for this component
    const [sessionData, setSessionData] = useState(initialState);

    function updateSesion(){
        setSessionData({
            token: '999999999',
            sesion: sessionData.sesion + 1
        })
    }

    return (
        <myGeneralContext.Provider value={sessionData}>
            {/* All content here could be read data from sessionData*/}
            {/* Also, if it is updated, these components will be updated too */}
            <h1>Example of useState() and useContext()</h1>
            <Component1></Component1>
            <button onClick={updateSesion}>Update Sesion</button>
        </myGeneralContext.Provider>
    )
}
