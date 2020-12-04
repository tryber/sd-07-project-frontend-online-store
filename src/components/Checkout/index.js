import React from 'react';

import {
  AddressInput,
  CepInput,
  CheckoutContainer,
  CheckoutContent,
  CheckoutForm,
  CPFInput,
  EmailInput,
  NameInput,
  Pay,
  PhoneInput,
} from './styles';

class Checkout extends React.Component {
  render() {
    return (
      <CheckoutContainer>
        <CheckoutContent>
          <CheckoutForm>
            <NameInput data-testid="checkout-fullname" />
            <EmailInput data-testid="checkout-email" />
            <CPFInput data-testid="checkout-cpf" />
            <PhoneInput data-testid="checkout-phone" />
            <CepInput data-testid="checkout-cep" />
            <AddressInput data-testid="checkout-address" />
            <Pay>Pagar</Pay>
          </CheckoutForm>
        </CheckoutContent>
      </CheckoutContainer>
    );
  }
}

export default Checkout;
