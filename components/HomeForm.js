import React from 'react';
import styled from 'styled-components';
import img from '../assets/img/IMG-7080.jpg';

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
`;

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

const HomeForm = () => {
  return (
    <>
      <FormBox>
        <FormImg />
        <Form>
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
           </SelectBox>          
        </Form>
      </FormBox>
    </>
  )
}

export default HomeForm
