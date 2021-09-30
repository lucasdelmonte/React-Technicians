import React, { Component } from "react";
import '../App.css';

export default class TableTechnicians extends Component {
  render() {
    return <div style={styleTable}>
      <table>
        <tr>
          <th >Id</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Tipo</th>
          <th>Estado</th>
          <th>Mantenimiento</th>
          <th>Opciones</th>
        </tr>
          {this.props.technicians.map( e =>
            <tr>
              <td key={e.id}>{e.id}</td>
              <td>{e.nombre}</td>
              <td>{e.telefono}</td>
              <td>{e.tipo}</td>
              <td>{e.estado}</td>
              <td>{e.mantenimiento}</td>
              <td><button>/</button><button>X</button></td>
            </tr>
          )}
      </table>
    </div>
  }
}

const styleTable = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px',
  height: '100%',
  backgroundColor: 'white',
  borderRadius: '0px 0px 8px 0px',
  borderCollapse: 'collapse'
}
