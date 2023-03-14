import React, { Component } from 'react'
//import ‘../../styles/clock.scss’;

class Clock extends Component {
   constructor(props) {
    console.log('constructor')
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         ejecutado: 0,
         nombre: 'Martín',
         apellidos: 'San José'
      };
   }
   componentDidMount(){
    console.log('componentDidMount')
      this.timerID = setInterval (
         () => this.tick(), 10000
      );
   }

   tick(){
    console.log('tick')
     this.setState((prevState) => {
        let ejecutado = prevState.ejecutado +1;
        return {
           ...prevState,
           fecha: new Date(),
           ejecutado
        }
     });
  }

   componentWillUnmount() {
        console.log('componentWillUnmount')
      clearInterval (this.timerID);
   }

   render() {
      console.log('render')
      return (
         <div>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>ejecutado: {this.state.ejecutado}</h1>
         </div>
      )
   }
}
export default Clock;