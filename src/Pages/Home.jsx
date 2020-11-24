import React from 'react';
import CategoryList from '../components/CategoryList';
import InitialMessage from '../components/InitialMessage';

class Home extends React.Component {
    constructor() {
        console.log('hey constructor home');

        super();
        this.updateSearchValue  = this.updateSearchValue.bind(this);
        this.state = {
          search:''
        };
      }

    updateSearchValue(field, newValue) {
      this.setState({ [field]: newValue });
    }
      
    render() {
        return ( 
          <div>
            <header>
              <input 
                id="search_bar"
                type="text"
                className="search_bar"
                value={this.state.search}
                onChange={(event) => this.updateSearchValue('search', event.target.value)}
              />
            </header>
            <InitialMessage />
            <CategoryList />
        </div>
      );
  }
}

export default Home;

/*Lógica de atualização do status usada foi retirado do 
projeto sd-07-project-movie-card-library-crud, arquivo MovieForm */