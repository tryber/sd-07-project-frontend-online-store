import React, { Component } from 'react';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    // const { ObjectPayment } = props.location.state;
    this.state = {
      ObjectPayment: [],
      //   total: 0,
    };
  }

  componentDidMount() {
    this.saveStatePay();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async saveStatePay() {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if (dataCart !== null) {
      this.setState({
        ObjectPayment: dataCart,
      });
    }
    // const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    // if (dataTotal !== null) {
    //   this.setState({
    //     total: dataTotal,
    //   });
  }

  render() {
    const { ObjectPayment } = this.state;
    console.log(ObjectPayment);
    return (
      <div>
        <div>
          <h2>Revise seus Produtos</h2>
          {ObjectPayment.map((item) => (
            <div key={ item.id }>
              <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
              <h3>
                total à pagar: $
                { item.price * item.quantity }
              </h3>
              <p>
                Preço unitário: $
                { item.price }
              </p>
              <img src={ item.thumbnail } alt="imagem do produto" />
            </div>
          ))}
        </div>
        <div>
          <form>
            <h2>Dados do comprador:</h2>
            <label htmlFor="product-detail-evaluation-text-name">
              Nome:
              <input
                name="Nome"
                id="product-detail-evaluation-text-name"
                data-testid="checkout-fullname"
                type="text"
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="data-user-cpf">
              CPF:
              <input
                name="CPF"
                data-testid="checkout-cpf"
                id="data-user-cpf"
                placeholder="Digite seu CPF"
                type="text"
                maxLength={ 11 }
                minLength={ 11 }
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-text-name">
              Email:
              <input
                name="Email"
                data-testid="checkout-email"
                id="product-detail-evaluation-text-name"
                type="text"
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="data-user-cpf">
              Telefone:
              <input
                name="Telefone"
                id="data-user-cpf"
                data-testid="checkout-phone"
                placeholder="Digite seu CPF"
                type="text"
                maxLength={ 11 }
                minLength={ 11 }
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="data-user-cpf">
              CEP:
              <input
                name="CEP"
                id="data-user-cpf"
                data-testid="checkout-cep"
                placeholder="Digite seu CPF"
                type="text"
                maxLength={ 11 }
                minLength={ 11 }
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-text-msg">
              Endereço:
              <input
                name="Endereco"
                id="product-detail-evaluation-text-msg"
                data-testid="checkout-address"
                placeholder="Mensagem Opcional"
                type="text"
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-text-msg">
              Complemento:
              <input
                name="Complemento"
                id="product-detail-evaluation-text-msg"
                data-testid="product-detail-evaluation"
                placeholder="Mensagem Opcional"
                type="text"
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="data-user-cpf">
              Número:
              <input
                name="Numero"
                id="data-user-cpf"
                placeholder="Digite seu CPF"
                type="Number"
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-text-msg">
              Cidade:
              <input
                name="Cidade"
                id="product-detail-evaluation-text-msg"
                placeholder="Mensagem Opcional"
                type="text"
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-text-msg">
              Estado:
              <select onChange={ this.handleChange.bind() } name="estados-brasil">
                <option value="">Selecione o estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </label>
            <h2>Pagamento:</h2>
            <label htmlFor="product-detail-evaluation-text-msg">
              Boleto:
              <input
                name="Boleto"
                id="product-detail-evaluation-text-msg"
                placeholder="Mensagem Opcional"
                type="radio"
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-text-msg">
              Visa:
              <input
                name="Visa"
                id="product-detail-evaluation-text-msg"
                placeholder="Mensagem Opcional"
                type="radio"
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-text-msg">
              MasterCard:
              <input
                name="MasterCard"
                id="product-detail-evaluation-text-msg"
                placeholder="Mensagem Opcional"
                type="radio"
                onChange={ this.handleChange.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-text-msg">
              Elo:
              <input
                name="Elo"
                id="product-detail-evaluation-text-msg"
                placeholder="Mensagem Opcional"
                type="radio"
                onChange={ this.handleChange.bind(this) }
              />
            </label>

            <input type="submit" value="comprar" />
          </form>
        </div>
      </div>
    );
  }
}
