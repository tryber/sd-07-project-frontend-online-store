import React from 'react';

const Checkout = () => {
  const onSubmit = (e) => e.preventDefault();

  return (
    <form>
      <label htmlFor="fullname">
        Nome completo:
        <input data-testid="checkout-fullname" type="text" id="fullname" />
      </label>

      <label htmlFor="email">
        Email:
        <input data-testid="checkout-email" type="text" id="email" />
      </label>

      <label htmlFor="cpf">
        CPF:
        <input data-testid="checkout-cpf" type="text" id="cpf" />
      </label>

      <label htmlFor="phone">
        Telefone:
        <input data-testid="checkout-phone" type="text" id="phone" />
      </label>

      <label htmlFor="postal-code">
        CEP:
        <input data-testid="checkout-cep" type="text" id="postal-code" />
      </label>

      <label htmlFor="address">
        Endereço:
        <input data-testid="checkout-address" type="text" id="address" />
      </label>

      <input type="submit" value="Enviar" onClick={ onSubmit } />
    </form>
  );
};

export default Checkout;
