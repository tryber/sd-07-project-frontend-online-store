import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import './App.css';
import ListagemDeProdutos from './ListagemDeProdutos'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListagemDeProdutos} />
        </Switch>
      </BrowserRouter>
      <div></div>
    </div>
  );
}

export default App;
