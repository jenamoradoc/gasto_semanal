import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
  
  state = {
    presupuesto : '',
    restante: '',
    gastos: {}
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

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
