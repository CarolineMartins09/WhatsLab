import React from "react";
import { Header } from "../style/styled";
import logo from "../imagens/logo.png"

function Cabecalho() {
    return (
        <Header>
            <img src={logo} alt="logo"></img>
            <h3>WhatsLab</h3>
        </Header>
    )
}

export default Cabecalho;