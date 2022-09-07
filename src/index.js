import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Vitrine from './componentes/Vitrine';
import Detalhes from './componentes/Detalhes';
import Principal from './componentes/Principal';
import Page404 from './componentes/Page404';
import SobreMim from './componentes/SobreMim';

import './MeuCss.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Cabecalho />
    <Routes>
      <Route path="/" element={<Principal/>}/>
      <Route path="vitrine" element={<Vitrine/>}/>
      <Route path="detalhes" element={<Detalhes/>}>
        <Route path=":id" element={<Detalhes/>} />
      </Route>
      <Route path="sobremim" element={<SobreMim/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
    <Rodape />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
