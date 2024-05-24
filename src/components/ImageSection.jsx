import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data.json";

const ImageSection = () => {
  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);

  const [mainImage, setMainImage] = useState(item.images.image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    item.images.image,
    item.images.image1,
    item.images.image2,
    item.images.image3,
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <ImgSide>
      <Images>
        <MainImg onClick={() => openModal(0)}>
          <img src={mainImage} alt={item.category} />
        </MainImg>
        <LittleImages>
          {images.map((image, index) => (
            <LittleImage key={index} onClick={() => setMainImage(image)}>
              <img src={image} alt={item.category} />
            </LittleImage>
          ))}
        </LittleImages>
      </Images>

      {isModalOpen && (
        <>
          <GlobalStyle />
          <Modal>
            {/* <CloseButton onClick={closeModal}>✖</CloseButton> */}
            {/* <ArrowButton direction="left" onClick={prevImage}>
              ❮
            </ArrowButton> */}
            <ModalImage>
              <CloseButton onClick={closeModal}>✖</CloseButton>
              <ArrowButton direction="left" onClick={prevImage}>
                ❮
              </ArrowButton>
              <img src={images[currentImageIndex]} alt={item.category} />
              <ArrowButton direction="right" onClick={nextImage}>
                ❯
              </ArrowButton>
            </ModalImage>
          </Modal>
        </>
      )}
    </ImgSide>
  );
};

export default ImageSection;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
`;

const ModalImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -35px;
  right: -15px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "left" ? "left: -45px;" : "right: -45px;")}
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
`;
