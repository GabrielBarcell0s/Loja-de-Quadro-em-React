import React from "react";
import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import Carregamento from "./Carregamento";

function Detalhes() {

  // Utilização de Hooks
  const [produto, setProduto] = React.useState({});

  const { id } = useParams();
  const url = "https://63069afec0d0f2b8011f9944.mockapi.io/produtos/" + id

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => { setProduto(res) })
  }
    , [url])

  // Estilização

  const conteinerCss = {
    display: "flex",
    height: "84vh",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }

  const imagemCss = {
    width: "380px",
    height: "380px",
    borderRadius: "20%",
    paddingRight: "30px"
  }

  const glassEffect = {
    display: "flex",
    background: "rgba(0,0,0,0.2)",
    width: "890px",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15%"
  }

  const textoCss = {
    fontSize: "23px",
    textAlign: "center"
  }

  const botaoCss = {
    width: "150px",
    height: "75px",
    borderRadius: "25%",
    background: "#7B68EE",
    border: "0",
    fontSize: "20px",
    cursor: "pointer",
    marginTop: "20px"
  }

  const TituloCss = {
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "10px"
  }

  const botaoVoltarCss = {
    ...botaoCss,
    position: "absolute",
    left: "10px",
    top: "60px",
    width: "100px",
    height: "50px"
  }

  // Renderização

  if (Object.keys(produto).length === 0) return <Carregamento pagina="Detalhes"/>

  return (
    <main>
      <div style={conteinerCss}>
        <Link to="/vitrine">
          <button style={botaoVoltarCss}>
            Voltar
          </button>
        </Link>
        <div style={glassEffect}>
          <div>
            <img id="imagemDesc" src={produto.imagem} alt={produto.imagem} style={imagemCss} />
            <p style={{...textoCss, fontSize:"40px", paddingTop:"10px"}}><strong>Por: R$25,99</strong></p>
          </div>

          <div>
            <h1 style={TituloCss}> The Promisse Neverland</h1>
            <p style={textoCss}>Conheça uma parte do meu trabalho <br />
              Agora você pode decorar seu cantinho favorito <br />
              com seu anime favorito <br />
              feito a mão com muito carinho
            </p>
            <h2 style={{ ...TituloCss, fontSize: "35px", marginTop: "10px" }}>Descrição:</h2>
            <p style={textoCss}>Personagem: {produto.personagem} <br />
              Quadro de algodão<br />
              Tamanho: {produto.tamanho}<br />
              Tinta: Aquarela</p>
            <button id="botaoComprar" style={{ ...botaoCss, marginLeft: "110px" }}>Comprar agora</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Detalhes;