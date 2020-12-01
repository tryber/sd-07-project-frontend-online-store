import React from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Forms extends React.Component {
  render() {
    return (
      <main className="container-fluid">
        <section className="form-section">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Endereço de e-mail</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Senha</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">Entrada de arquivo</label>
              <input type="file" id="exampleInputFile" />
              <p className="help-block">Exemplo de texto de ajuda em nível de bloco.</p>
            </div>
            <div className="checkbox">
    
      <input type="checkbox" Me selecione />
    
  </div>
  <button type="submit" className="btn btn-default">Enviar</button>
</form>

        </section>
      </main>

    );
  }
}

export default Forms;
