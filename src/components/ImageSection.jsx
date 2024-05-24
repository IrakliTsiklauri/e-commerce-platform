import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data.json";
import closeIcon from "../images/icon-close.svg";

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

      {isModalOpen && (
        <>
          <Modal>
            <ModalImage>
              <CloseButton onClick={closeModal}>
                <img src={closeIcon} alt="Close" />
              </CloseButton>
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

const ImgSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const Images = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const MainImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 2px solid orange;
  width: 52%;
  height: 52%;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  @media (min-width: 900px) and (max-width: 1200px) {
    width: 70%;
    height: 70%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 60%;
    height: 60%;
  }
`;

const LittleImages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  width: 52%;

  @media (min-width: 900px) and (max-width: 1200px) {
    width: 70%;
    height: 70%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 60%;
    height: 60%;
  }
`;

const LittleImage = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  outline: 2px solid orange;
  width: 20%;
  height: 20%;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
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
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
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

  img {
    width: 30px;
    height: 30px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) =>
    direction === "left" ? "left: -45px;" : "right: -45px;"}
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
`;
