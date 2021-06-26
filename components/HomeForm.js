import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';
import img from '../assets/img/IMG-7080_455x223.jpg';
import imgMd from '../assets/img/IMG-7080_1_700x368.jpg';
import imgSm from '../assets/img/IMG-7080_2_350x370.jpg';
import CheckoutButton from './CheckoutButtons';

const FormBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 455px;
  display: flex;
  flex-direction: column;
  border: 3px solid lightgray;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 5px;
    max-width: 700px;
  }
`;

const FormImg = styled.div`
  background-image: url(${img});
  flex: 2;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 1000px) {
    flex: unset;
    height: 368px;
    width: 100%;
    background-image: url(${imgMd});
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    background-image: url(${imgSm});
  }
`;

const QrBox = styled.div`
  flex: 1;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Form = styled.form`
  flex: 2;
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  ul {
    list-style: none;
  }

  div {
        padding: 5px;

        li {
          margin: 5px;
        }
      }

  input {
    height: 30px;
  }

  .ticketAmount {
    text-align: center;
  }

  .btns {
    width: 100%;
  }

  .submit {
    width: 100%;
    height: 35px;
    background: #FFC439;
    color: #003087;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
  }

  @media screen and (max-width: 1000px) {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 80%;
      padding: 5px;
      margin: 5px 0;
    }
  }
`;

const HomeForm = () => {
// hold ticket amount
const [qrInput, setQrInput] = useState('');
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

// submit ticket qr value

const onChangeHandler = event => {
  setQrInput(event.target.value);
};

const onSubmitHandler = (event) => {
  event.preventDefault();

  alert(`You, (${qrInput}) have selected ${JSON.stringify(order)}, for $${totalPrice}. Do you wish to proceed?`);
};


useEffect(() => console.log(order, totalPrice), [order]);
  return (
    <>
      <FormBox>
        {/* <FormImg /> */}
        <Form
          onSubmit={onSubmitHandler}
        >
          <h2>Get Tickets</h2>
          <QrBox>
            <QRCode 
              id='abc'
              value={qrInput}
            />
            <input 
              onChange={onChangeHandler}
              value={qrInput}
              type="text"
              name="name"
              placeholder="First and Last Name"
            />
          </QrBox>
          <ul>
            <div>
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
            </div>
            <div>
              <li>-Standard Adult - $15 </li>
              <button
                type="button"
                className="ticketAmount standardAdultTicket"
                onClick={() => addToOrder({ ticket: "Standard Adult", price: 15 })}>
                Add To Order
              </button>
            </div>
            <div>
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
            </div>
            <div>
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
              <div>
                <button type="submit" value="submit" className="submit">Submit</button>
              </div>
            </div>
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