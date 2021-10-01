import React, { Component } from "react";
import '../App.css';

import Technician from "./Technician";

export default class TableTechnicians extends Component {
  render() {
    return <div style={styleTable}>
      <table>
        <tr>
          <th >Id</th>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Tipo</th>
          <th>Estado</th>
          <th>Mantenimiento</th>
          <th>Opciones</th>
        </tr>
          {this.props.technicians.map( technician =>
              <Technician technician={technician} key={technician.id}/>
          )}
      </table>
    </div>
  }
}

const styleTable = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px',
  height: '55%',
  backgroundColor: '#87f5e2',
  borderRadius: '0px 0px 8px 0px'
}


