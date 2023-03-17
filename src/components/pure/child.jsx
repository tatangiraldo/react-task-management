import React, {useRef} from 'react';

//estos parametros deben estar entre llaves, si no no funciona
const Child = ({dataFromParent, functionInParent, sendDataToParent}) => {

    const messageRef = useRef()
    const nameRef = useRef()


    function pressButton(){
        console.log( `No param Text` );
    }

    function pressButtonParams(text){
        console.log( `Text: ${text}` );
    }

    function sendDataToParentAndReceiveAgain(e){
        debugger;
        e.preventDefault();
        sendDataToParent(nameRef.current.value);
    }

    return (
        <div style={{border:'solid 1px blue', margin: '5px'}}>
            <p onMouseOver={() => {console.log('mouse over')}}>
                I'm a Child
            </p>
            <span>Data from parent: <b> {dataFromParent} </b></span>
            <br />   <br />
           
            <button onClick={() => console.log('pulsado bt 1')}>
                Boton 1
            </button>

            <button onClick={pressButton}>
                Boton 2
            </button>

            {
                /**
                -si se deja asi se ejecuta de inmediato
                    onClick={pressButtonParams('err')} 
                -si se pone con funcion anonima si se ejecuta con el click
                    onClick={() => pressButtonParams('err')}
                 */
            }
            <button onClick={() => pressButtonParams('err')}>
                Boton 3
            </button>

            <input 
                type="text" 
                placeholder="Insert Text"
                //onFocus={() => console.log('focus')}
                onChange={(e) => console.log('on change: ', e.target.value)}
                //onCopy={() => console.log('copied')}
                ref={messageRef}
                 />

            <button onClick={() => functionInParent(messageRef.current.value)}>
                   Send to parent
            </button>

            <div style={{margin: '20px', border: 'solid 1px green'}}>
                <form onSubmit={sendDataToParentAndReceiveAgain}>
                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Upate Name</button>
                </form>
            </div>

        </div>

    );
}

export default Child;
