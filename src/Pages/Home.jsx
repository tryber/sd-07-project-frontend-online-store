import React from 'react';
import InitialMessage from '../components/InitialMessage';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.updateSearchValue  = this.updateSearchValue.bind(this);
        this.state = {
          shearch:'',
        };
      }

    updateSearchValue (field, newValue) {
        this.setState({ [field]: newValue });
      }
      
    render() {
        return ( 
            <div>
                <header>
                    <input 
                      id="shearch_bar"
                      type="text"
                      className="shearch_bar"
                      value={this.state.shearch}
                      onChange={(event) => this.updateShearcValue('shearch', event.target.value)}
                    />
                </header>
                <InitialMessage />
            </div>
        )
    }
}

export default Home;

/*Lógica de atualização do status usada foi retirado do 
projeto sd-07-project-movie-card-library-crud, arquivo MovieForm */