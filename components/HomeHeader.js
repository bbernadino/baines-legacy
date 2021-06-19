import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  height: 110px;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
`;

const Logo = styled.div`
  flex: 2;
`;

const Menu = styled.div`
  flex: 1;
`;

const HomeHeader = () => {
  return (
    <Header>
      <Logo><h1>Baine</h1></Logo>
      <Menu>Menu</Menu>
    </Header>
  )
}

export default HomeHeader;
