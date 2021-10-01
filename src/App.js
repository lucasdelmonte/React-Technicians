import React, { Component } from 'react';

// Estilos
import './App.css';

// Datos json
import technicians from './sample/technicians.json';

// Componentes
import Header from './components/Header';
import Nav from './components/Nav';
import TableTechnicians from './components/TableTechnicians';
import FormTechnicians from './components/FormTechnicians';

export default class App extends Component {

  state = {
    technicians : technicians 
  }

  render(){
    return (
      <div className="app">
        <header className="header">
          <Header />
        </header>
        <div className="contenedor">
          <nav className="nav">
            <Nav />
          </nav>
          <section className="table">
            <TableTechnicians technicians={this.state.technicians}/>
            <FormTechnicians />
          </section>
        </div>
      </div>
    );
  }
}


