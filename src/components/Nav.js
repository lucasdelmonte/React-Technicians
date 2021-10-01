import React, { Component } from "react";
import { BrowserRouter as Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div >
        <Link exact to="/api/inicio"><p>Inicio</p></Link>
        <Link exact to="/api/mantenimientos"><p>Mantenimientos</p></Link>
        <Link exact to="/api/tecnicos"><p style={styleLinks}>Técnicos</p></Link>
        <Link exact to="/api/calderas"><p>Calderas</p></Link>
        <Link exact to="/api/clientes"><p>Clientes</p></Link>
      </div>
    );
  }
}

const styleLinks = {
  color: 'green'
};
