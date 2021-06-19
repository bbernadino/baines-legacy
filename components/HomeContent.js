import React from 'react'
import styled from 'styled-components';

const HomeContentBox = styled.div`
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeContent = () => {
  return (
    <>
      <HomeContentBox>
        <Title>
          <h1>Bring Light to Baine's Legacy</h1>
        </Title>
        <InfoBox>
          <h4>Date: July 10</h4>
          <h4>Location: Lewiston UT Fairgrounds (106 E Center St. Lewiston UT)</h4>
          <h4>Time:</h4>
          <ul>
            <li>7 p.m. Registration</li>
            <li>8 p.m. Run (1 mile run/walk, 5k run)</li>
            <li>10 p.m. Fireworks</li>
          </ul>
          <h3>Wear everything glow in the dark to bring LIGHT to Baine's Legacy</h3>
        </InfoBox>
        <InfoBox>
          <h3>Ticket Options</h3>
          <ul>
            <li>Standard Child (0-12) - $5</li>
            <li>Standard Adult - $15</li>
            <li>Premium Child - $15</li>
            <li>Premium Adult- $25 </li>
          </ul>
        </InfoBox>
        <InfoBox>
          <h3>Standard Package Includes:</h3>
          <ul>
            <li>Registration for run</li>
            <li>Glow in the dark wristband</li>
            <li>Glow sticks</li>
          </ul>
        </InfoBox>
        <InfoBox>
          <h3>Premium Package includes Standard Package plus Baine's Legacy T-shirt!</h3>
        </InfoBox>
      </HomeContentBox>
    </>
  )
}

export default HomeContent
