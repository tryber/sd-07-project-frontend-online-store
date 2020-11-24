import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
     <Link to=
          <div data-testid="home-initial-message">
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
      </div>
    );
  }
}
