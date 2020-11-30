import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer-container">
        <section className="main-footer-content">
          <h1 className="main-footer-h1">Siga-nos</h1>
          <div className="main-footer-content-dev">
            <img src="https://avatars1.githubusercontent.com/u/69821525?s=460&u=6d61da7ffb85d4d41d18491555d7b300313f8e69&v=4" alt="Marcelo Borges" />
            <a href="https://github.com/NicoleTeisen" target="_blank">
              <h1> Nicole Teisen </h1>
            </a>
          </div>
          <div className="main-footer-content-dev">
            <img src="https://avatars1.githubusercontent.com/u/69230005?s=460&u=0be366bf82421b73c5de84060d5223118ee7ecbf&v=4" alt="Marcelo Borges" />
            <a href="https://github.com/thayscosta3" target="_blank">
              <h1> Thays Costa </h1>
            </a>
          </div>
          <div className="main-footer-content-dev">
            <img src="https://avatars3.githubusercontent.com/u/69821947?s=460&v=4" alt="Marcelo Borges" />
            <a href="https://github.com/dennerpl" target="_blank">
              <h1> Denner S. Carneiro </h1>
            </a>
          </div>
          <div className="main-footer-content-dev">
            <img src="https://avatars0.githubusercontent.com/u/39052029?s=460&u=bc8cb986deebcea05648ad07ff92f4ba1463fbb6&v=4" alt="Marcelo Borges" />
            <a href="https://github.com/Marcelllombm" target="_blank">
              <h1> Marcelo Borges </h1>
            </a>
          </div>
          <h2>©2020 - Main Equipe 5, todos os direitos reservados.</h2>
        </section>
      </div>
    );
  }
}
