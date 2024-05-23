import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data.json"

const ImageSection = () => {

  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);

  return (
    <ImgSide>
      <Images>
        <MainImg>
          <img src={item.images.image} alt="" />
        </MainImg>
        <LittleImages>
          <LittleImage></LittleImage>
          <LittleImage></LittleImage>
          <LittleImage></LittleImage>
          <LittleImage></LittleImage>
        </LittleImages>
      </Images>
    </ImgSide>
  );
};

export default ImageSection;

const ImgSide = styled.div`
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
  cursor: pointer;

  img{
    width: 445px;
    height: 445px;
    border-radius: 8px;
  }
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
