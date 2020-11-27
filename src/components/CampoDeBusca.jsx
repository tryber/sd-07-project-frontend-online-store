import React from 'react';

class CampoDeBusca extends React.Component {

    constructor() {
        super();
        this.changeSearchState = this.changeSearchState.bind(this);
        this.state = {
            search: '',
        }
    }

    changeSearchState({ target }) {
        this.setState({
            search: target.value,
        })
    }
    render() {
        const { query, handleInputChange } = this.props;
        return (
            <div>
                <input data-testid='query-input' type="text" value={this.state.search} onChange={this.changeSearchState} />
                <button data-testid='query-button' type='button' value={query} onClick={() => handleInputChange(this.state.search)}>Pesquisar</button>
            </div>
        )
    }

}

export default CampoDeBusca;
