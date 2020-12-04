import React from 'react';

import {
  AddressInput,
  CepInput,
  CheckoutContainer,
  CheckoutContent,
  CheckoutForm, CPFInput, EmailInput, LabelAddress, LabelCep, LabelCPF, LabelEmail,
  LabelName, LabelPhone,
  NameInput, Pay, PhoneInput,
} from './styles';

class Checkout extends React.Component {
  render() {
    return (
      <CheckoutContainer>
        <CheckoutContent>
          <CheckoutForm>
            <LabelName>
              <NameInput
                data-testid="checkout-fullname"
              />
            </LabelName>
            <LabelEmail>
              <EmailInput
                data-testid="checkout-email"
              />
            </LabelEmail>
            <LabelCPF>
              <CPFInput
                data-testid="checkout-cpf"
              />
            </LabelCPF>
            <LabelPhone>
              <PhoneInput
                data-testid="checkout-phone"
              />
            </LabelPhone>
            <LabelCep>
              <CepInput
                data-testid="checkout-cep"
              />
            </LabelCep>
            <LabelAddress>
              <AddressInput
                data-testid="checkout-address"
              />
            </LabelAddress>
            <Pay>Pagar</Pay>
          </CheckoutForm>
        </CheckoutContent>
      </CheckoutContainer>
    );
  }
}

export default Checkout;
