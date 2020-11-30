import React from 'react';
import '../Pages/Home.css';

class DigiteTermo extends React.Component {
  render() {
    return (
      <div className="header-initial-message">
        <h3 className="paragraph-home" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}

export default DigiteTermo;
