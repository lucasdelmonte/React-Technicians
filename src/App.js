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

  addTechnician = (name, telephone, type, state, maintenance) => {
    const newTechnician = {
      id: this.state.technicians.length + 1,
      nombre: name,
      telefono: telephone,
      tipo: type,
      estado: state,
      mantenimiento: maintenance,
      bool: false
    }
    console.log(newTechnician); // Bien
    this.setState({
      technicians : [...this.state.technicians, newTechnician] 
    })
  }

  deleteTechnician = (id) => {
    const newTechnician = this.state.technicians.filter(technician => technician.id !== id);
    this.setState({technicians : newTechnician});
  }

  updateTechnician = (id) => {
    const newTechnician = this.state.technicians.map(technician => {
      if (technician.id === id) {
        technician.bool = !technician.bool
      }
      console.log('Prueba');
      return technician;
    });
    
    this.setState({technicians: newTechnician});
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
            <TableTechnicians technicians={this.state.technicians} deleteTechnician={this.deleteTechnician} updateTechnician={this.updateTechnician} />
            <FormTechnicians addTechnician={this.addTechnician} />
          </section>
        </div>
      </div>
    );
  }
}


