import React from 'react';
import CampoDeBusca from '../components/CampoDeBusca.jsx'
import BotaoCarrinho from '../components/BotaoCarrinho.jsx';

class ListagemDeProdutos extends React.Component {
    render() {
        return (
            <div>
                <CampoDeBusca />
                <p data-testid ="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
                <BotaoCarrinho />
            </div>
        )
    }
}


export default ListagemDeProdutos;