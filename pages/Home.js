import React from 'react';
import styled from 'styled-components';
import HomeHeader from '../components/HomeHeader';
import HomeContent from '../components/HomeContent';
import HomeForm from '../components/HomeForm';

const HomePage = styled.div`
  border: 5px solid lightgrey;
  height: 95%;
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <HomePage>
        <HomeHeader />
        <Content>
          <HomeContent />
          <HomeForm />
        </Content>
      </HomePage>
    </>
  )
}

export default Home
