import React from 'react';

import UserInfoForm from '../components/UserInfoForm';

class Payment extends React.Component {
  constructor() {
    super();

    this.handleUserInfo = this.handleUserInfo.bind(this);
  }

  handleUserInfo(userInfo) {
    console.log(userInfo);
  }

  render() {
    return (
      <div>
        <h3>Payment</h3>
        <UserInfoForm onSubmit={ this.handleUserInfo } />
      </div>
    );
  }
}

export default Payment;
