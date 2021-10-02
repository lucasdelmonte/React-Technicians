import React, { Component } from "react";

export default class Technician extends Component {
    render() {
        return <tr>
                <td key={this.props.technician.id}>{this.props.technician.id}</td>
                <td>{this.props.technician.nombre}</td>
                <td>{this.props.technician.telefono}</td>
                <td>{this.props.technician.tipo}</td>
                <td>{this.props.technician.estado}</td>
                <td>{this.props.technician.mantenimiento}</td>
                <td><button className="styleEdit"><i class="fas fa-edit"></i></button><button className="styleTrash" onClick={this.props.deleteTechnician.bind(this, this.props.technician.id)}><i class="fas fa-trash"></i></button></td>
        </tr>
    }
}