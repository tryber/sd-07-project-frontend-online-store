import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Form(props) {
  const { register, errors } = props;

  return (
    <form>
      <fieldset>
        <legend>Informações do comprador</legend>

        <InputsWrapper>
          <input
            ref={register}
            id="name"
            name="name"
            type="text"
            placeholder="Nome completo"
            data-testid="checkout-fullname" />
          <p>{errors.name?.message}</p>

          <input
            ref={register}
            id="cpf"
            name="cpf"
            type="string"
            placeholder="CPF"
            data-testid="checkout-cpf" />
          <p>{errors.cpf?.message}</p>

          <input
            ref={register({ required: true })}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            data-testid="checkout-email" />
          <p>{errors.email?.message}</p>

          <input
            ref={register({ required: true })}
            id="phone"
            name="phone"
            type="tel"
            placeholder="(11) 12345-6789" pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
            data-testid="checkout-phone" />
          <p>{errors.phone?.message}</p>

          <input
            ref={register({ required: true })}
            id="cep"
            name="cep"
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep" />
          <p>{errors.cep?.message}</p>

          <input
            ref={register({ required: true })}
            id="address"
            name="address"
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address" />
          <p>{errors.address?.message}</p>

          <input
            ref={register({ required: true })}
            id="additional"
            name="additional"
            type="text"
            placeholder="Complemento"
            data-testid="" />

          <input
            ref={register({ required: true })}
            id="neighborhood"
            name="neighborhood"
            type="text"
            placeholder="Bairro"
            data-testid="" />
          <p>{errors.neighborhood?.message}</p>

          <input
            ref={register({ required: true })}
            id="city"
            name="city"
            type="text"
            placeholder="Cidade" />
          <p>{errors.city?.message}</p>

          <input
            ref={register({ required: true })}
            id="state"
            name="state"
            type="text"
            placeholder="Estado" />
          <p>{errors.state?.message}</p>
        </InputsWrapper>

      </fieldset>
    </form>
  );
}

Form.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Form;
