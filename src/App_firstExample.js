import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="http://tmbprd.atnubis.com/Encomiendas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Un vistazo a la vieja escuela de JSP/Bootstrap
        </a>
      </header>
      <div>
        <h3>Bienvenidos al curso de ReactJS</h3>
        <p>
          <strong>Hola mundo</strong> con <code>react code</code>
        </p>
        <h2>Prueba</h2>
        <p>
          Esta es una pequeña prueba de componentes simples html.
        </p>
        <table>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>TELCO0001</td>
            <td>PCRF NFV</td>
            <td>Policy and charging rules function, virtualizaed</td>
          </tr>
          <tr>
            <td>TELCO0002</td>
            <td>STP</td>
            <td>SS7 signal based router. Bare metal solution</td>
          </tr>
          <tr>
            <td>TELCO0003</td>
            <td>SBC NFV</td>
            <td>Session Border Controller to protect SIP communications.</td>
          </tr>
          <tr>
            <td>TELCO0004</td>
            <td>SPR</td>
            <td>Suscriber Profile Repository with LDAP interface.</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
