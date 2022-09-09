import React from "react";
import { Link } from "react-router-dom"
import styled from '@emotion/styled'
import Formulario from "./Formulario";

class Principal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tempo: <>Promoção acaba em: <br /> 00:00:00</> }
  }

  componentDidMount() {
    this.manipulador()
  }

  componentDidUpdate() {
    this.manipulador()
  }

  manipulador = () => {
    setTimeout(this.obterTempo, 1000);
  }

  obterTempo = () => {
    const data = new Date();

    let horas = 23 - data.getHours();
    let minutos = 59 - data.getMinutes();
    let segundos = 59 - data.getSeconds();

    if (data.getHours() === 0) {
      this.setState({ tempo: <>Promoção Finalizada</> })
    }
    else {
      this.setState({
        tempo: <>Promoção acaba em: <br />
          {`${horas < 10 ? "0" + horas : horas}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}`}</>
      })
    }
  }

  render() {
    const BotaoVitrine = styled.button`
      width: 200px;
      height: 50px;
      border-radius: 30%;
      background: rgba(0,0,0,0.3);
      border: 0;
      font-size: 17px;
      cursor: pointer;
      margin-top: 20px;
      color:purple;
      margin-left: 30px;
    `

    const ConteinerPrincipalCss = styled.main`
      width:100vw;
      height:80.9vh;
    `

    const ConteinerSecundarioCss = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
    `

    const FotoNamiCss = styled.img`
      width:300px;
      height:300px;
      border-radius: 25%;
      padding-right:20px;
    `

    const CronometroCss = styled.div`
      top:150px;
      left:930px;
      margin-top:25px;
      font-size:30px;
      text-align:center;
    `
    const ConteinerImagemBotao = styled.div`
      margin-top:40px;
      display:flex;
      justify-content:center;
      align-items:center;
      background:rgba(0,0,0,0.1);
      width:800px ;
      height:400px ;
      border-radius:25%;
    `

    const TextoCss = styled.p`
      font-size:25px;
      margin-top:10px;
    `

    return (
      <>

        <aside style={{ position: "absolute", top: "25%" }}>
          <Formulario />
        </aside>

        <ConteinerPrincipalCss>
          <ConteinerSecundarioCss>
            <ConteinerImagemBotao>
              <FotoNamiCss src="https://i.postimg.cc/zvgcX68h/Nami.jpg" alt="nami" />
              <div>
                <h1>Loja de Quadros</h1>
                <TextoCss>Venha Conhecer os meus quadros <br />
                  Feitos a mão</TextoCss>
                <Link to="vitrine">
                  <BotaoVitrine>👉<strong>Ir para vitrine</strong>👈</BotaoVitrine>
                </Link>
                <CronometroCss>{this.state.tempo}</CronometroCss>
              </div>
            </ConteinerImagemBotao>
          </ConteinerSecundarioCss>
        </ConteinerPrincipalCss>
      </>
    )
  }
}

export default Principal;
