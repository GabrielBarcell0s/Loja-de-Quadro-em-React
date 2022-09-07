import React from "react";

function Rodape() {
  const conteinerCss = {
    backgroundImage: "url('https://mfiles.alphacoders.com/953/thumb-1920-953097.png')",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }



  return (
    <div style={{ ...conteinerCss, background: "rgba(0,0,0,0.1)", height: "50px" }}>
      <p>Quadros criados por <strong>Letícia Candéa</strong> | <a href="https://www.instagram.com/myy.little.art/" target="_blank" rel="noreferrer">My Little Art(instagram)</a></p>
    </div>

  )
}

export default Rodape;