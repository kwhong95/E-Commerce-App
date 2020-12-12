import React, { useState } from 'react'
import { Steps } from 'antd';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

import './CheckoutForm.css';

const { Step } = Steps;

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(2);
  
  const ConfirmStep = () => {
    return <div>ComfirmStep</div>
  }
  return (
    <>
      <div className="toolbar"/>
      <main className="container">
        <div className="checkoutForm">
          <h2>Checkout</h2> 
          <div className="stepForm">
            <Steps current={activeStep}>
              <Step title="Shipping Address" description={<AddressForm />} />
              <Step title="Payment Details" description={<PaymentForm />}/>
            </Steps>
            {activeStep === 2 && <ConfirmStep />}
          </div>
        </div>
      </main>
    </>
  )
}

export default CheckoutForm;
