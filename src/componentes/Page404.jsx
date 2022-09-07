import { Link } from "react-router-dom"

function Page404() {
  const asideCss = {
    width: "100vw",
    height: "84.2vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const conteinerCss = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.1)",
    width: 600,
    height: 450,
    borderRadius: "15%"
  }

  const tituloCss = {
    position: "relative",
    top: -15,
    fontSize: 70
  }

  const imagemCss = {
    borderRadius: "15%",
    width: 498,
    height: 247
  }

  const botaoCss = {
    width: "110px",
    height: "50px",
    borderRadius: "25%",
    background: "#7B68EE",
    border: "0",
    fontSize: "17px",
    cursor: "pointer",
    marginTop: "20px"
  }


  return (<aside style={asideCss}>
    <div style={conteinerCss}>
      <h1 style={tituloCss}>404: Page Not Found</h1>
        <img style={imagemCss} src="https://i.pinimg.com/originals/af/04/95/af0495ff54e939581520170671dc2cf3.gif" alt="meme" />
      <Link to="/">
        <button style={botaoCss}>Voltar ao Inicio</button>
      </Link>
    </div>
  </aside>)
}

export default Page404;