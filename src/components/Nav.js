import React, { Component } from "react";
//import { BrowserRouter as Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div style={styleNav}>
        <p style={styleLinks}>Inicio</p>
        <p style={styleLinks}>Mantenimientos</p>
        <p style={styleLinks}>Técnicos</p>
        <p style={styleLinks}>Calderas</p>
        <p style={styleLinks}>Clientes</p>
      </div>
    );
  }
}

const styleNav = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px',
  height: '100%',
  backgroundColor: 'red',
  borderRadius: '0px 0px 0px 8px'
};

const styleLinks = {
  marginBottom: '30px',
  fontSize: '20px'
};
