import React from 'react'

class SearchBar extends React.Component {
    render() {

        return (
            <div>
                <input type="text"></input>
                <div data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</div>
            </div>
        )

    }
}

export default SearchBar;