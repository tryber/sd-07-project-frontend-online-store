import React from 'react';

class States extends React.Component {
  constructor() {
    super()
    this.state = {
      brStates: []
    }
  }

  componentDidMount() {
    const states = [
      { 'AC': 'Acre' },
      { 'AL': 'Alagoas' },
      { 'AP': 'Amapá' },
      { 'AM': 'Amazonas' },
      { 'BA': 'Bahia' },
      { 'CE': 'Ceará' },
      { 'DF': 'Distrito Federal' },
      { 'ES': 'Espírito Santo' },
      { 'GO': 'Goías' },
      { 'MA': 'Maranhão' },
      { 'MT': 'Mato Grosso' },
      { 'MS': 'Mato Grosso do Sul' },
      { 'MG': 'Minas Gerais' },
      { 'PA': 'Pará' },
      { 'PB': 'Paraíba' },
      { 'PR': 'Paraná' },
      { 'PE': 'Pernambuco' },
      { 'PI': 'Piauí' },
      { 'RJ': 'Rio de Janeiro' },
      { 'RN': 'Rio Grande do Norte' },
      { 'RS': 'Rio Grande do Sul' },
      { 'RO': 'Rondônia' },
      { 'RR': 'Roraíma' },
      { 'SC': 'Santa Catarina' },
      { 'SP': 'São Paulo' },
      { 'SE': 'Sergipe' },
      { 'TO': 'Tocantins' },
    ];
    this.setState({ brStates: states })
    console.log(states)
  }

  render() {
    return(
      this.state.brStates.map((allStates) => <option value="{ allStates }"></option>)
    )
  }
}

export default States;