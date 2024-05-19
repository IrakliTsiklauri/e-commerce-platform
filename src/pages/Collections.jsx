import React from "react";
import styled from "styled-components";

const Collections = () => {
  return (
    <MainSection>
      <ImgSide>
        <Images>
          <MainImg></MainImg>
          <LittleImages>
            <LittleImage></LittleImage>
            <LittleImage></LittleImage>
            <LittleImage></LittleImage>
            <LittleImage></LittleImage>
          </LittleImages>
        </Images>
      </ImgSide>
      <InfoSide>new collections</InfoSide>
    </MainSection>
  );
};

export default Collections;

const MainSection = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

const ImgSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InfoSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 445px;
  height: 445px;
  border: 1px solid black;
  border-radius: 8px;
`;

const LittleImages = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 35px;
`;

const LittleImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  border: 1px solid black;
  border-radius: 5px;
`;
