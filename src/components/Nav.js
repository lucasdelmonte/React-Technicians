import React, { Component } from "react";
import { BrowserRouter as Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link exact to="#"><p>Inicio</p></Link>
        <Link exact to="#"><p>Mantenimientos</p></Link>
        <Link exact to="#"><p style={styleLinks}>Técnicos</p></Link>
        <Link exact to="#"><p>Calderas</p></Link>
        <Link exact to="#"><p>Clientes</p></Link>
      </div>
    );
  }
}

const styleLinks = {
  color: 'green'
};
