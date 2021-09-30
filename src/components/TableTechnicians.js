import React, { Component } from "react";

export default class TableTechnicians extends Component {
  render() {
    return (
      <div style={styleTable}>
        <h3>Probando section del tablero.</h3>
      </div>
    );
  }
}

const styleTable = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px',
  height: '100%',
  backgroundColor: 'yellow',
  borderRadius: '0px 0px 8px 0px'
}