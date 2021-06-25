import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from '../assets/img/IMG-7080.jpg';
import CheckoutButton from './CheckoutButtons';

const FormBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 3px solid lightgray;
  border-radius: 5px;
`;

const FormImg = styled.div`
  background-image: url(${img});
  flex: 2;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Form = styled.form`
  flex: 3;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  ul {
    list-style: none;
  }

  .ticketAmount {
    text-align: center;
  }

  .btns {
    width: 80%;
  }
`;

const HomeForm = () => {

  // hold ticket amount
const [order, setOrder] = useState(null);
const [totalPrice, setTotalPrice] = useState(0);
const [adultShirtSize, setAdultShirtSize] = useState(null);
const [childShirtSize, setChildShirtSize] = useState(null);

// create function to add items to order
const addToOrder = (ticketInfo) => {
  if (order === null) {
    setOrder([ticketInfo]);
  } else if (order !== null) {
    setOrder([...order, ticketInfo]);
  }
  setTotalPrice(totalPrice + ticketInfo.price);
};

useEffect(() => console.log(order, totalPrice), [order]);
  return (
    <>
      <FormBox>
        <FormImg />
        <Form>
          <h2>Get Tickets</h2>
          <ul>
            <li>-Standard Child (0-12) - $5 </li>
            <button
              type="button"
              className="ticketAmount standardChildTicket"
              onClick={() => {
                addToOrder({ ticket: "Standard Child", price: 5 });
                console.log(order);
              }}>
              Add To Order
            </button>
            <li>-Standard Adult - $15 </li>
            <button
              type="button"
              className="ticketAmount standardAdultTicket"
              onClick={() => addToOrder({ ticket: "Standard Adult", price: 15 })}>
              Add To Order
            </button>
            <li>-Premium Child - $15 </li>
            <select onChange={(e) => setChildShirtSize(e.target.value)}>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>X-Large</option>
            </select>
            <button
              type="button"
              className="ticketAmount premiumChild"
              onClick={() =>
                addToOrder({ ticket: "Premium Child", price: 15, shirtSize: `${childShirtSize}` })
              }>
              Add to Order
            </button>

            <li>-Premium Adult- $25 </li>
            <select onChange={(e) => setAdultShirtSize(e.target.value)}>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>X-Large</option>
            </select>

            <button
              type="button"
              className="ticketAmount premiumAdult"
              onClick={() =>
                addToOrder({ ticket: "Premium Adult", price: 25, shirtSize: `${adultShirtSize}` })
              }>
              Add To Order
            </button>
        </ul>

        <CheckoutButton totalPrice={totalPrice} />
          {/* ------- */}
        </Form>
      </FormBox>
    </>
  )
}

export default HomeForm


{/* 
  
  const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  label {
    margin: 5px;
  }
  
  input {
    padding: 5px;
  }
`;

const SelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  label {
    margin-right: 10px;
  }
`;
  
  
  
  <FormInput>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" />
          </FormInput>
          <FormInput>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" />
          </FormInput>
          <FormInput>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" />
          </FormInput>
          <SelectBox>
            <div>
              <label htmlFor="size">Size</label>
              <select name="size" id="size">
                <option value="">Select...</option>
                <option value="xs">XS</option>
                <option value="sm">SM</option>
                <option value="med">MED</option>
                <option value="lg">LG</option>
                <option value="xl">XL</option>
              </select>
            </div>
            <div>
              <label htmlFor="color">Color</label>
              <select name="color" id="color">
                <option value="">Select...</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
              </select>
            </div>
           </SelectBox>   */}