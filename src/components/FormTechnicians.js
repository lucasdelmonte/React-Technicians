import React, { Component } from "react";
import '../App.css';

export default class TableTechnicians extends Component {

    state = {
        name: '',
        telephone: '',
        type: '',
        state: '',
        maintenance: ''
    }

    onSubmit = e => {
        this.props.addTechnician(
            this.state.name,
            this.state.telephone,
            this.state.type,
            this.state.state,
            this.state.maintenance
            );
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <label for="name">Nombre completo</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                onChange={this.onChange} 
                value={this.state.name} />
            <label for="telephone">Teléfono</label>
            <input 
                type="text" 
                name="telephone" 
                id="telephone" 
                onChange={this.onChange} 
                value={this.state.telephone} />
            <label for="type">Tipo</label>
            <input 
                type="text" 
                name="type" 
                id="type" 
                onChange={this.onChange} 
                value={this.state.type} />
            <label for="state">Estado</label>
            <input 
                type="text" 
                name="state" 
                id="state" 
                onChange={this.onChange} 
                value={this.state.state} />
            <label for="maintenance">Mantenimiento</label>
            <input 
                type="text" 
                name="maintenance" 
                id="maintenance" 
                onChange={this.onChange} 
                value={this.state.maintenance} />
            <input type="submit" value="Guardar"/>
        </form>
    }
}
