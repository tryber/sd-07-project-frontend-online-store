import React from 'react';
import '../Pages/Home.css';

class DigiteTermo extends React.Component {
  render() {
    return (
      <div className="header-initial-message">
         <p data-testid="home-initial-message">
             Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
     </div>
    );
  }
}

export default DigiteTermo;
