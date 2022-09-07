import React from "react";
import { Link } from "react-router-dom"

function Cabecalho() {
  const conteinerCss = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "10px",
    paddingRight: "10px"
  }

  const itens = {
    marginLeft: "35px",
    marginRight: "35px"
  }

  const Imagemlogo = {
    width: "70px",
    height: "70px",
  }

  const TextoLogo = {
    position: "relative",
    top: "-5px",
    fontSize: 50,
    textDecoration: "overline",
    color: "white"
  }

  const imagensLaterias = {
    width: "70px",
    heigh: "70px"
  }

  return (
    <div style={{ ...conteinerCss, background: "rgba(0,0,0,0.1)", height: "70px" }}>

      <div style={{ ...conteinerCss, justifyContent: "center" }}>
        <img src="https://i.postimg.cc/281wXHFK/dee704163b1bd7c8c4c95130120ad855d8e75ea3r1-736-736v2-uhq-removebg-preview.png" alt="Sabito" style={imagensLaterias} />
      </div>
      <div style={conteinerCss}>
        <Link to="/">
          <div className="NavBar" style={itens}>
            inicio
          </div>
        </Link>
        <img src="https://i.postimg.cc/pLfRzJ7m/Whats-App-Image-2022-09-06-at-19-34-32-removebg-preview.png" alt="Logo" style={Imagemlogo} />
        <p style={TextoLogo} id="logo">
          GBarc
        </p>
        <Link to="/sobremim">
          <div className="NavBar" style={itens}>
            Sobre Mim
          </div>
        </Link>

      </div>
      <div style={{ ...conteinerCss, justifyContent: "center" }}>
        <img src="https://i.postimg.cc/xC1h4vdT/90ac855c96b4c3032b80041a550753fe-removebg-preview.png" alt="Tanjiro" style={imagensLaterias} />
      </div>
    </div >
  )
}

export default Cabecalho;