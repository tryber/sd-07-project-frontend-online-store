import React from 'react';
import styled from 'styled-components';

const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Form() {
  return (
    <form>
      <fieldset>
        <legend>Informações do comprador</legend>

        <InputsWrapper>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome completo"
            data-testid="checkout-fullname"
          />

          <input
            id="cpf"
            name="cpf"
            type="string"
            placeholder="CPF"
            data-testid="checkout-cpf"
          />

          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            data-testid="checkout-email"
          />

          <input
            required
            id="phone"
            name="phone"
            type="tel"
            placeholder="(11) 12345-6789"
            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
            data-testid="checkout-phone"
          />

          <input
            required
            id="cep"
            name="cep"
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
          />

          <input
            required
            id="address"
            name="address"
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
          />

          <input
            required
            id="additional"
            name="additional"
            type="text"
            placeholder="Complemento"
            data-testid=""
          />

          <input
            required
            id="neighborhood"
            name="neighborhood"
            type="text"
            placeholder="Bairro"
            data-testid=""
          />

          <input
            required
            id="city"
            name="city"
            type="text"
            placeholder="Cidade"
          />

          <input
            required
            id="state"
            name="state"
            type="text"
            placeholder="Estado"
          />
        </InputsWrapper>

      </fieldset>
    </form>
  );
}

export default Form;
