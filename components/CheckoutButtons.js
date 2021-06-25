import React from "react";

import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function CheckoutButton(props) {
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: props.totalPrice,
          },
        },
      ],
    });
  };

  return (
    <div className="btns">
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>
  );
}

export default CheckoutButton;
