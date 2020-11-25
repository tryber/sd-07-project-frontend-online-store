import React from 'react';

class Categoria extends React.Component {
    render() {
        const {id , name} = this.props.category;
        return (
            <li  key={id} data-testid='category'>
                {name}
            </li>
        )
    }
}

export default Categoria;
