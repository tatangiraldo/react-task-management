/** 
 * 
*/
import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {

        console.log('Component created')

        const intervalId = setInterval(() => {
            document.title = `${Math.random()}`
            console.log('Update component ') 
         }, 3000);

        return () => {
            document.title = "Time stopped"
            console.log('Component will be disappear')    
            clearInterval(intervalId);
        };

    }, []); //para que se ejecute solo una vez
    
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
