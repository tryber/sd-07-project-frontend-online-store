import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
function Home() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Header } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Home;
