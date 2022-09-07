import React from "react";

function Carregamento(props) {
  const CarregamentoCss = {
    display: "flex",
    width: "100vw",
    height: "84vh",
    justifyContent: "center",
    alignItems: "center"
  }

  const TextoCarregamentoCss = {
    fontSize: 50
  }

  const loadingCss = {
    border: "8px solid rgba(0,0,0,0.1)",
    borderLeftColor: "purple",
    width: 100,
    height: 100,
    borderRadius: "50%",
  }

  return(
  <div style={CarregamentoCss}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p style={TextoCarregamentoCss}>Carregando {props.pagina}</p>
      <div id="loading" style={loadingCss}></div>
    </div>
  </div>)
}

export default Carregamento