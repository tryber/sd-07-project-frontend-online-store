import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import DefaultWrapper from '../../components/DefaultWrapper';
import Form from '../../components/Form';
import Button from '../../components/Button';

const detailPage = {
  title: 'Checkout',
  showHeaderButton: false,
  closeButtonLink: '/',
};

function CheckoutPage() {
  const navigate = useHistory();

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardValidity, setCardValidity] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [userData, setUserData] = useState({});
  const [done, setDone] = useState(false);

  const onHandlePayment = event => setPaymentMethod(event.target.value);

  const validateData = () => {
    const validCardNumber = cardNumber.length === 16;
    const validCardName = cardName.length > 4;
    const validCardValidity = cardValidity.length > 4;

    if (paymentMethod && validCardNumber && validCardName && validCardValidity) {
      return true;
    }
    return false;
  };

  const onSubmit = (formData) => {
    const isValid = validateData();

    if (isValid) {
      setUserData(formData);
      localStorage.setItem('userData', JSON.stringify(userData));
      setDone(true);
    }
  };

  const buttonSubmit = (
    <Button onClick={handleSubmit(onSubmit)}>Finalizar compra</Button>
  );

  useEffect(() => {
    if (done) navigate.push('/finish');
  }, [done, navigate]);

  return (
    <DefaultWrapper wrapperInfo={detailPage} render={buttonSubmit}>
      <div>

        <h1>Método de Pagamento</h1>
        <div onChange={onHandlePayment} className="payment_method">
          <label htmlFor="boleto">
            <input type="radio" name="payment" id="boleto" value="boleto" />
            Boleto
          </label>
          <label htmlFor="credit_card">
            <input type="radio" name="payment" id="credit_card" value="credit_card" />
            Cartão de crédito
          </label>
          <label htmlFor="debit_card">
            <input type="radio" name="payment" id="debit_card" value="debit_card" />
            Cartão de débito
          </label>
        </div>

        <div>
          <input
            type="text"
            name="card_name_data"
            value={cardName}
            onChange={event => setCardName(event.target.value)}
            placeholder="Nome conforme escrito no cartão" />

          <input
            type="number"
            name="card_number_data"
            value={cardNumber}
            onChange={event => setCardNumber(event.target.value)}
            placeholder="Número do cartão" />

          <input
            type="text"
            name="card_validity_data"
            value={cardValidity}
            onChange={event => setCardValidity(event.target.value)}
            placeholder="mês/ano" />
        </div>

      </div>

      <Form register={register} errors={errors} />
    </DefaultWrapper>
  );
}

const schema = Yup.object().shape({
  name: Yup.string().required().min(4),
  cpf: Yup.string().required().min(11).max(11),
  email: Yup.string().required(),
  phone: Yup.string().required(),
  cep: Yup.string().required().min(8),
  address: Yup.string().required(),
  additional: Yup.string(),
  neighborhood: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
});

export default CheckoutPage;
