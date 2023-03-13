import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import ComponentWithContext from './hooks/Ejemplo3';
import ComponentWithChildren from './hooks/Ejemplo4';
//import ContacListComponent from './components/container/ContactListComponent';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import TasksListComponent from './components/container/TasksListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*comment*/}

        {/*<GreetingF name='Tatan'/>*/}
        
        {/*<TasksListComponent/>*/}

        {/*<ContacListComponent/>*/}

        {/*<Ejemplo1/>*/}

       {/* <Ejemplo2/> */}

        {/* <ComponentWithContext/> */}

        
        <ComponentWithChildren name="Elijah">
          {/* All this content will be props.children */}
          <h3>
            Contenido del  props.children
          </h3>
        </ComponentWithChildren>        
      </header>
    </div>
  );
}

export default App;
