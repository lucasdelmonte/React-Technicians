import React from 'react';
import './App.css';

// Componentes
import Header from './components/Header';
import Nav from './components/Nav';
import TableTechnicians from './components/TableTechnicians';

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="prueba">
        <div className="nav">
          <Nav />
        </div>
        <div className="table">
          <TableTechnicians />
        </div>
      </div>
    </div>
  );
}

export default App;
