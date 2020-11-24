import React from 'react';
import InitialMessage from '../components/InitialMessage';

class ShearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateShearcValue  = this.updateShearcValue.bind(this);
        this.state = {
          text:'',
        };
      }

    updateShearcValue (field, newValue) {
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
                    value={this.state.text}
                    onChange={(event) => this.updateShearcValue('text', event.target.value)}/>
                </header>
                <InitialMessage />
            </div>
        )
    }
}

export default ShearchPage;

/*Lógica de atualização do status usada foi retirado do 
projeto sd-07-project-movie-card-library-crud, arquivo MovieForm */