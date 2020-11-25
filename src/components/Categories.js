import React from 'react';

class Categories extends React.Component {
    render() {
        const { categorie } = this.props;
        const { name } = categorie;
        return (
            <div className="movie-card" data-testid="category" >
                {name}
            </div >
        );
    }
}

export default Categories;
