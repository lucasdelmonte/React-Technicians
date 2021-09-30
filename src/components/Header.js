import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div style={styleHeader}>
        <div>
          <h2>CaldAR</h2>
        </div>
        <div>
          <p style={styleUser}>Usuario Marcos23</p>
          <p style={styleExit}>Salir</p>
        </div>
      </div>
    );
  }
}

const styleHeader = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "gray",
  padding: "0px 20px",
  borderRadius: "8px 8px 0px 0px"
};

const styleUser = {
  fontSize: "19px",
  height: "10px",
  padding: "0px"
};

const styleExit = {
  fontSize: "20px",
  textAlign: "right"
};
