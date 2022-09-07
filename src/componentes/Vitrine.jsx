import React from "react"
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import Carregamento from "./Carregamento";

function Vitrine() {

  // Pegando os produtos da API

  const [url] = React.useState("https://63069afec0d0f2b8011f9944.mockapi.io/produtos?loja=Gbarc")
  const [quadros, setQuadros] = React.useState([]);

  useEffect(() => {
    fetch(url).then((res) => res.json()).then((res) => setQuadros(res))
  }, [url])

  // Mostrando a quantidade de itens no carrinho
  const [carrinho, setCarrinho] = React.useState(0);

  // Verificação para ver se existe produtos no local Storage
  useEffect(() => {
    if (localStorage.length === 0) localStorage.setItem("produto", 0)
  }, [])

  // Pegando o item no local storage para o useState
  useEffect(() => {
    setCarrinho(parseInt(localStorage.getItem("produto")))
  }, [])

  // Enviando o valor para local storage quando acontecer a desmontagem
  useEffect(() => {
    const adicionar = () => {
      localStorage.setItem("produto", carrinho)
    }
    return adicionar
  })

  const somar = () => setCarrinho(carrinho + 1)
  const limparCarrinho = () => setCarrinho(0)

  const produtoCss = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "325px",
    height: "550px",
    background: "rgba(0,0,0,0.1) ",
    borderRadius: "5%",
    margin: "25px",
  }

  const conteinerCss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",

  }

  const ImagemCss = {
    width: "250px",
    height: "285px",
    borderRadius: "5px",
    opacity: "1"
  }

  const TextoDescCss = {
    fontSize: "22px",
  }

  const BotaoCss = {
    width: "110px",
    height: "50px",
    borderRadius: "25%",
    background: "#7B68EE",
    border: "0",
    fontSize: "17px",
    cursor: "pointer",
    marginTop: "20px"
  }

  const CarrinhoCss = {
    position: "fixed",
    bottom: 30,
    right: 30,
    fontSize: 30,
    background: "rgba(0,0,0,0.1)",
    border: "1px solid rgba(0,0,0,0.5)",
    borderRadius: "50%",
    padding: 10
  }

  const ProdutosCarrinhoCss = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: 30,
    right: 70,
    fontSize: 20,
    width: 20,
    height: 20,
    padding: 5,
    background: "rgba(0,0,0,0.1)",
    border: "1px solid rgba(0,0,0,0.5)",
    borderRadius: "50%",
    color: "blueviolet"
  }

  const limparCss = {
    position: "fixed",
    bottom: 80,
    right: 15,
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: "50%",
    cursor: "pointer",
    border: "1px solid rgba(0,0,0,0.5)",
    background: "rgba(0,0,0,0.1)"
  }

  if (quadros.length === 0) return (
    <Carregamento pagina="Vitrine" />
  )

  return (
    <>
      <section style={conteinerCss}>
        {
          quadros.map((item, i) => (
            <div key={`Produtos${i}`} style={produtoCss}>
              <img style={ImagemCss} src={item.imagem} alt="fotinha" />
              <h2>{item.titulosVitrine}</h2>
              <p>A partir de </p>
              <p><strong style={TextoDescCss}>R$ {item.precoVitrine[0]}</strong> </p>
              <p>até <strong style={TextoDescCss}> 3x de R$ {item.precoVitrine[1]}</strong> sem juros </p>
              <p>ou <strong style={TextoDescCss}>R$ {item.precoVitrine[2]}</strong> via boleto Bancário</p>
              <div style={{display:"flex", justifyContent:"center"}}>
                <button onClick={somar} style={{ ...BotaoCss, marginRight: "15px" }}>Adicionar ao carinho</button>
                <Link to={`/detalhes/${i + 20}`}>
                  <button style={BotaoCss}>Comprar agora</button>
                </Link>
              </div>
            </div>))
        }
      </section>

      <aside>
        <p id="carrinho" style={CarrinhoCss}>🛒</p>
        <div style={ProdutosCarrinhoCss}>{carrinho}
        </div>
        <button onClick={limparCarrinho} style={limparCss}>❌</button>
      </aside>
    </>
  )
}

export default Vitrine;