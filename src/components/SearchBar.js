import React from 'react'

class SearchBar extends React.Component {
    render() {

        return (
            <div className="search">
                <input className="search-bar" type="text"></input>
                <div data-testid="home-initial-message">
                    <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
                </div>
            </div>
        )

    }
}

export default SearchBar;