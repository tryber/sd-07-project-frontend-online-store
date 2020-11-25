import React from 'react';
import CampoDeBusca from '../components/CampoDeBusca'
import ListaDeCategorias from '../components/ListaDeCategorias'

class ListagemDeProdutos extends React.Component {
    render() {
        return (
            <div>
                <CampoDeBusca />
                <ListaDeCategorias />
                <p data-testid ="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
            </div>
        )
    }
}


export default ListagemDeProdutos;