/*
Examples about:
    useState()
    useRef()
    useEffect()
*/
import React, {useState, useRef, useEffect} from 'react';


const Ejemplo2 = () => {

    //Initialice  properties counter1 and 2 with useState
    const [counter1, setcounter1] = useState(0);
    const [counter2, setcounter2] = useState(0);

    //create a reference (useRef) to asociate a var 
    //with one DOM's element (HTML view)
    //it's similar to Jquery for make an html tag reference
    const myRef = useRef();
    const myRef2 = useRef();

    function increaseOne(){
      setcounter1( +1)   
    }

    function increaseTwo(){
      setcounter2(counter2+1)   
    }

    /*
    Case 1 :
        execute a snipet of code
        every time has a change of component
        the code inside useEffect() will be executed
    */
   /*useEffect(() => {
        console.log('There was a change ')
        console.log(myRef)
   })*/

   /****************************/

   /*
   Case 2:
        Every time has a change in counter1, will be executed what useEffect() says.
        When the change is on the counter2, nothing happens
   */
   /*useEffect(() => {
        console.log('There was a change on cunter1 ')
        console.log(myRef)
   }, [counter1])*/

   /*************************/
   /*
   Case 3:
        Every time has a change in counter1 or counter2, will be executed what useEffect() says.
        When the change is in other element, nothing happens
    */
    useEffect(() => {
        console.log('There was a change on cunter1 ');
        console.log(myRef);
        console.log(myRef2);
    }, [counter1, counter2]);

    return (
        <div>
            <h1>useState, useRef and useEffect</h1>
            <h2>Counter 1 - {counter1}</h2>
            <h2>Counter 2 - {counter2}</h2>
            <h4 ref={myRef}>
                Example of element referenced
            </h4>
            <h5 ref={myRef2}>
                reference 2
            </h5>
            <div>
                <button onClick={increaseOne}>Increase 1</button>
                <button onClick={increaseTwo}>Increase 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
