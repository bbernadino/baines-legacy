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
  padding: 15px;
`;

const HomeForm = () => {
  return (
    <>
      <FormBox>
        <FormImg />
        <Form />
      </FormBox>
    </>
  )
}

export default HomeForm
