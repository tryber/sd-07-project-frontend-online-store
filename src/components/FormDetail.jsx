import React from 'react';

class FormDetail extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      textArea: '',
      comments: [],
    };
  }

  handleClick(textArea) {
    this.setState((previousState) => ({
      comments: [...previousState.comments, textArea],
      textArea: '',
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // prettier-ignore
  render() {
    const { textArea, comments } = this.state;

    return (
      <div>
        <form className="form-details">
          Avaliações
          <br />
          <textarea
            placeholder="Escreva um comentário"
            data-testid="product-detail-evaluation"
            onChange={ this.handleChange }
            value={ textArea }
            name="textArea"
          />
          <button type="button" onClick={ () => this.handleClick(textArea) }>
            Enviar
          </button>
        </form>

        <div>
          {comments.map((element) => (
            <div className="comments" key={ element }>
              Comentário:
              <p>{element}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FormDetail;
