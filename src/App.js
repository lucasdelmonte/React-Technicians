import React, { Component } from 'react';
import './App.css';

// Datos json
import technicians from './sample/technicians.json';

// Componentes
import Header from './components/Header';
import Nav from './components/Nav';
import TableTechnicians from './components/TableTechnicians';

export default class App extends Component {

  state = {
    technicians : technicians 
  }

  render(){
    return (
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="contenedor">
          <div className="nav">
            <Nav />
          </div>
          <div className="table">
            <TableTechnicians technicians={this.state.technicians}/>
          </div>
        </div>
      </div>
    );
  }
}


