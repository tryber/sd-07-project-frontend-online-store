import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonSubmit,
  CardDetailsFormContainer,
  CardDetailsFormContent,
  CardDetailsFormTitle,
  ComentInput, Comment,
  Comments, Email, EmailInput,
  Evaluation, Form, Message,
  SelectInput,
} from "./styles";

class CardDetailsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
      evaluation: 5,
      comments: JSON.parse(localStorage.getItem('comments')) || [],
    };
    this.changeInputs = this.changeInputs.bind(this);
    this.handleAddComments = this.handleAddComments.bind(this);
  }

  handleAddComments(event) {
    event.preventDefault();
    const { idProduct } = this.props;
    const { email, message, evaluation } = this.state;

    const newComment = {};
    newComment.email = email;
    newComment.evaluation = evaluation;
    newComment.id = idProduct;
    if (message) newComment.message = message;

    this.setState((state) => ({ comments: [...state.comments, newComment] }));
    this.addCommentStorage(newComment);
  }

  addCommentStorage(newComment) {
    const empty = 0;
    const { comments } = this.state;
    if (comments.length !== empty) {
      localStorage.setItem('comments', JSON.stringify(comments));
    } else {
      localStorage.setItem('comments', JSON.stringify([newComment]));
    }
  }

  changeInputs({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, message, comments } = this.state;
    const commentsThisID = comments.filter((comment) => {
      const { idProduct } = this.props;
      return comment.id === idProduct;
    }) || [];

    return (
      <CardDetailsFormContainer>
        <CardDetailsFormTitle>
          Avaliações
        </CardDetailsFormTitle>
        <CardDetailsFormContent>
          <Form>
            <EmailInput
              type="text"
              placeholder="Digite seu E-mail"
              name="email"
              value={ email }
              onChange={ this.changeInputs }
            />
            <SelectInput
              type="select"
              name="evaluation"
              onChange={ this.changeInputs }
            >
              <option value="1">*</option>
              <option value="2">**</option>
              <option value="3">***</option>
              <option value="4">****</option>
              <option value="5">*****</option>
            </SelectInput>
            <ComentInput
              data-testid="product-detail-evaluation"
              type="text"
              placeholder="Comentário (optional)"
              name="message"
              value={ message }
              onChange={ this.changeInputs }
            />
            <ButtonSubmit
              onClick={ this.handleAddComments }
            >
              Avaliar
            </ButtonSubmit>
          </Form>
          <Comments>
            {commentsThisID.map((comment) => (
              <Comment key={ comment.id }>
                <Email>{ comment.email }</Email>
                <Evaluation>
                  { `Avaliação: ${comment.evaluation}` }
                </Evaluation>
                { comment.message && <Message>{ comment.message }</Message> }
              </Comment>
            ))}
          </Comments>
        </CardDetailsFormContent>
      </CardDetailsFormContainer>
    );
  }
}

CardDetailsForm.propTypes = {
  idProduct: PropTypes.string,
};

CardDetailsForm.defaultProps = {
  idProduct: '0',
};

export default CardDetailsForm;
