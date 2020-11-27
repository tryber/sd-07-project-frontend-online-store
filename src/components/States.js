import React from 'react';

class States extends React.Component {
  constructor() {
    super();
    this.stados = this.stados.bind();
    this.state = {
      brStates: [],
    };
  }

  componentDidMount() {
    this.stados();
  }

  stados() {
    const states = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goías',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraíma',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];
    this.setState({ brStates: states });
  }

  render() {
    const { brStates } = this.state;
    return (
      brStates.map((allStates) =>(
        <option
          key={ allStates }
          value={ allStates }
        >
          {allStates}
        </option>
      )));
  }
}

export default States;
