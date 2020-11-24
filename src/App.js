import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
