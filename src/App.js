//import logo from './logo.svg';
import './App.css';
/*import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import ComponentWithContext from './hooks/Ejemplo3';
import ComponentWithChildren from './hooks/Ejemplo4';
import Clock from './hooks/lifeCycle/Clock';
import ClockF from './hooks/lifeCycle/ClockF';*/

import ContacListComponent from './components/container/ContactListComponent';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import TasksListComponent from './components/container/TasksListComponent';

//este se importò con llaves, para ejemplo de 
//importacion de varias funciones dentro de un component
//si en el component 'father.jsx' se le pone export default,
//se deberá importar sin {}
//import {Father} from './components/container/father';
//import LifeCycleExample from './components/pure/lifeCycleExample';

function App() {
  return (
    <div className="App">

      {/* <Father/> */}

      {/* <TasksListComponent/> */}
      <ContacListComponent/>
      {/* <LifeCycleExample/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/*comment*/} 

        {/*<GreetingF name='Tatan'/>*/}
        


        {/*<Ejemplo1/>*/}

       {/* <Ejemplo2/> */}

        {/* <ComponentWithContext/> */}
        
        {/* <ComponentWithChildren name="Elijah">
          {/* All this content will be props.children 
          <h3>
            Contenido del  props.children
          </h3>
        </ComponentWithChildren>         */}

        {/* <ClockF/> */}
      {/* </header> */}
    </div>
  );
}

export default App;
