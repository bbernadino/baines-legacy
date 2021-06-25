import React from 'react';
import styled from 'styled-components';
// import HomeHeader from '../components/HomeHeader';
import HomeContent from '../components/HomeContent';
import HomeForm from '../components/HomeForm';

const HomePage = styled.div`
  border: 5px solid lightgrey;
  border-radius: 5px;
  height: 95%;
  width: 95%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (min-width: 1300px) {
    max-width: 1300px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: unset;
  }
`;

const Home = () => {
  return (
    <>
      <HomePage>
        {/* <HomeHeader /> */}
        <Content>
          <HomeContent />
          <HomeForm />
        </Content>
      </HomePage>
    </>
  )
}

export default Home
