import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';

class App extends Component {
  
  state = {
    presupuesto : '',
    restante: '',
    gastos: {}
  }
  
  //al inicio de la app esto se realiza primero
  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () =>{
    let presupuesto = prompt('Cual es el presupuesto');

    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto:presupuesto,
        restante: presupuesto
      })
    }else{
      console.log('Presupuesto no valido');
      this.obtenerPresupuesto();
    }
  }

  //se agrega un nuevo gasto al state y se toma una copia del state actual
  agregarGasto = gasto => {
    const gastos = {...this.state.gastos};
    gastos[`gastos${Date.now()}`] = gasto; //agregar el gasto al objeto de el state
    this.setState({ //ponerlo en el state
      gastos
    })
  }



  render() {
    return (
      <div className="App container">
        <Header
          titulo = 'Gasto Semanal'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto ={this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos={this.state.gastos}
              />
              <ControlPresupuesto/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
