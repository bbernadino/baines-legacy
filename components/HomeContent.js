import React from 'react'
import styled from 'styled-components';

const HomeContentBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 480px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  li {
    list-style: none;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 25px;
    max-width: 700px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
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
          <p>
            Bring Light to Baine's Legacy is an annual event that is held in honor of Baine Brady Bobka
            who passed away in 2017 at the age of 7. He passed away from an unknown (at the time)
            genetic disorder called OTC Ornithine Transcarbamylase Deficiency. Since Baine's death,
            Baine's family has been able to track the disorder back to a specific ancestor, and have
            contacted all of their relatives to let them know about this disease. Because of Baine, many
            lives have been saved and doctors have learned so much more about this disorder. We created
            Bring Light to Baine's Legacy to honor Baine, as well as raise awareness about OTC
            Deficiency. This year we will also be honoring Rock Arthur Johnson who was less than one
            year old when he passed away in February from OTC Deficiency.
          </p>
        </InfoBox>
        <InfoBox>
          <h4>Date: July 10</h4>
          <h4>Location: Lewiston UT Fairgrounds (106 E Center St. Lewiston UT)</h4>
          <h4>Time:</h4>
          <ul>
            <li> -7 p.m. Registration</li>
            <li> -8 p.m. Run (1 mile run/walk, 5k run)</li>
            <li> -10 p.m. Fireworks</li>
          </ul>
          <h3>Wear everything glow in the dark to bring LIGHT to Baine's Legacy</h3>
        </InfoBox>
        <InfoBox>
          <h3>Ticket Options</h3>
          <ul>
            <li> -Standard Child (0-12) - $5</li>
            <li> -Standard Adult - $15</li>
            <li> -Premium Child - $15</li>
            <li> -Premium Adult- $25 </li>
          </ul>
        </InfoBox>
        <InfoBox>
          <h3>Standard Package Includes:</h3>
          <ul>
            <li> -Registration for run</li>
            <li> -Glow in the dark wristband</li>
            <li> -Glow sticks</li>
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
