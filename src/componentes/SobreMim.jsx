import React from 'react'

function SobreMim() {
  const conteinerCss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "81vh",
    width: "100vw",
  }

  const imagemCss = {
    width: 300,
    height: 300,
    borderRadius: "25%",
    marginLeft: 40,
    paddingRight: 30
  }

  const organizacaoCss = {
    display: "flex",
    alignItems: "center",
  }

  const textoCss = {
    fontSize: 23,
  }

  const iconeCss = {
    position: "relative",
    top: 20,
    width: 50,
    height: 50,
    marginRight: 30,
    marginLeft: 30,
  }

  const efeitoGlassCss = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.1)",
    width: 800,
    height: 500,
    borderRadius:"25%"
  }

  return (
    <div style={conteinerCss}>
      <div style={efeitoGlassCss}>
        <div style={organizacaoCss}>
          <div>
            <img style={imagemCss} src="https://i.postimg.cc/90t0CMGm/Whats-App-Image-2022-09-07-at-14-04-19.jpg" alt="MinhaFoto" />
            <p>
              <a href="https://www.instagram.com/gabrielpbarcellos/">
                <img style={{ ...iconeCss, marginLeft: 60 }} src='https://cdn-icons-png.flaticon.com/512/174/174855.png' alt='instagramIcon' />
              </a>

              <a href="https://www.linkedin.com/in/gabriel-p-barcellos/">
                <img style={{ ...iconeCss }} src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' alt='linkedinIcon' />
              </a>
              <a href="https://github.com/GabrielBarcell0s">
                <img style={{ ...iconeCss, marginRight: 0 }} src='https://cdn-icons-png.flaticon.com/512/1051/1051326.png' alt='githubIcon' />
              </a>
            </p>

          </div>
          <p style={textoCss}>Olá, meu nome é Gabriel Pimentel Barcellos, <br />a 6 meses atrás tive a oportunidade de participar do  <br />curso da Tech4me, não gostava da aréa do Front-End, <br />mas com o carinho do Professor Zépa, fui <br />começando a me ver na área, <br />agora tenho conhecimento intermediario de HTML/CSS/JS/REACT</p>
        </div>
      </div>
    </div>
  )
}

export default SobreMim