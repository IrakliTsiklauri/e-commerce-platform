import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data.json";

const ImageSection = () => {
  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);

  const[mainImage, setMainImage] = useState(item.images.image)

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <ImgSide>
      <Images>
        <MainImg>
          <img src={mainImage} alt={item.category} />
        </MainImg>
        <LittleImages>
          <LittleImage onClick={() => handleImageClick(item.images.image1)}>
            <img src={item.images.image1} alt={item.category} />
          </LittleImage>
          <LittleImage onClick={() => handleImageClick(item.images.image2)}>
            <img src={item.images.image2} alt={item.category} />
          </LittleImage>
          <LittleImage onClick={() => handleImageClick(item.images.image3)}>
            <img src={item.images.image3} alt={item.category} />
          </LittleImage>
          <LittleImage onClick={() => handleImageClick(item.images.image4)}>
            <img src={item.images.image4} alt={item.category} />
          </LittleImage>
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
  outline: 2px solid orange;
  width: 445px;
  height: 445px;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  img {
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
  outline: 2px solid orange;
  width: 88px;
  height: 88px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  img {
    width: 88px;
    height: 88px;
    border-radius: 5px;
  }
`;
