import React, { Component } from "react";
import '../App.css';

export default class TableTechnicians extends Component {

    onSubmit = e => {
        e.preventDefault();
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <label for="name">Nombre completo</label>
            <input type="text" name="name" id="name" />
            <label for="telephone">Teléfono</label>
            <input type="text" name="telephone" id="telephone" />
            <label for="type">Tipo</label>
            <input type="text" name="type" id="type" />
            <label for="state">Estado</label>
            <input type="text" name="state" id="state" />
            <label for="maintenance">Mantenimiento</label>
            <input type="text" name="maintenance" id="maintenance" />
            <input type="submit" value="Guardar" />
        </form>
    }
}
