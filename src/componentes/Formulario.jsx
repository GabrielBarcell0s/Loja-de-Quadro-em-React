/**@jsxImportSource @emotion/react */
import React from 'react';

function Formulario() {
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [termo, setTermo] = React.useState(false);
  const [nome, setNome] = React.useState("");

  const handleEnvio = (evento) => evento.preventDefault();
  const handleNome = (evento) => setNome(evento.target.value);
  const handleEmail = (evento) => setEmail(evento.target.value);
  const handleTelefone = (evento) => setTelefone(evento.target.value);
  const handleTermo = (evento) => setTermo(evento.target.checked);

  const enviar = () => {
    if (nome.length === 0){
      alert("Preencha o campo: Nome")
    }
    else if (email.length === 0){
      alert("Preencha o campo: Email!")
    }
    else if (telefone.length === 0){
      alert("Preencha o campo: Telefone!")
    }
    else{
      alert(`Cadastro Completo:
            Nome:${email}
            Email:${nome}
            Telefone:${telefone}
      `)
      handleEnvio();
    }
  }

  const ConteinerFormulario = {
    display: "flex",
    flexDirection: "column",
    background: "rgba(0,0,0,0.1)",
    width: 220,
    height: 300,
    borderTopRightRadius: "25%",
    borderBottomRightRadius: "25%"
  }
  const EntradaCss = {
    fontFamily: "'Times New Roman', Times, serif",
    width: 200
  }

  const botaoCss = {
    position:"relative",
    width:70,
    height:25,
    borderRadius:"15%",
    left:"30%",
    top:10,
    background:"blueviolet",
    border:0
  }


  return (
    <form name="pessoa" onSubmit={handleEnvio} css={ConteinerFormulario}>
      <h2 css={{ marginTop: 10 }}>Cadastre-se para <br /> obter Desconto</h2>

      <label css={{ marginTop: 20 }}>Nome:</label>
      <input css={EntradaCss} type="text" name="nome" value={nome} onChange={handleNome} />

      <label>Email:</label>
      <input css={EntradaCss}  name="email" type="email" value={email} onChange={handleEmail} />

      <label htmlFor="telefone">Telefone:</label>
      <input css={EntradaCss}  name="telefone" type="tel" value={telefone} onChange={handleTelefone}/>

      <div>
        <label css={{ marginRight: 10 }}>Aceita os Termos:</label>
        <input type="checkbox" name="termo" value={termo} onChange={handleTermo}/>
      </div>

      <button css={botaoCss} disabled={!termo} onClick={enviar}>Enviar</button>
    </form>
  )
}

export default Formulario