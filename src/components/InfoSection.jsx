import React, { useState } from "react";
import iconOk from "../images/photo-ok.webp";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data.json";
import AddToCartSection from "./AddToCartSection";
import ErrorPage from "../pages/ErrorPage";

const InfoSection = () => {
  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);

  const [selectedSize, setSelectedSize] = useState(
    item && Object.keys(item.size)[0]
  );

  if (!item) {
    return <ErrorPage />;
  }

  const toggleSizeSelection = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const itemPrice = Number(item.price).toFixed(2);

  return (
    <InfoSide>
      <Info>
        <CompanyName>{item.company}</CompanyName>
        <Shipping>
          <FreeShipping>
            <img src={iconOk} alt="iconOk" />
            <p>Free shipping on all orders</p>
          </FreeShipping>
          <Offer>
            <p>Limited-time offer</p>
          </Offer>
        </Shipping>
        <InfoAndDescription>
          <ItemInfo>{item.info}</ItemInfo>
          <ItemDescription>{item.description}</ItemDescription>
        </InfoAndDescription>
        <ItemPrice>
          <span>
            {item.currency} {itemPrice}
          </span>
        </ItemPrice>
        <ItemSize>
          {Object.keys(item.size).map((size) => (
            <span
              key={size}
              onClick={() => toggleSizeSelection(size)}
              style={selectedSize === size ? { color: "#fc7614" } : {}}
            >
              {size.toUpperCase()}
            </span>
          ))}
        </ItemSize>
        <SizeInfo>
          <p>{item.size[selectedSize]}</p>
        </SizeInfo>
        <AddToCartSection />
      </Info>
    </InfoSide>
  );
};

export default InfoSection;

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 40px;
  width: 100%;

  @media (min-width: 500px) and (max-width: 900px) {
    align-items: center;
  }

  @media (max-width: 500px) {
    align-items: center;
  }
`;

const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 40px;

  @media (max-width: 500px) {
    width: 100%;
    align-items: center;
  }
`;

const CompanyName = styled.h2`
  color: rgba(255, 126, 27, 1);
  font-size: 18px;
  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;
`;

const Shipping = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: #feefe1;
  padding: 30px 20px;
  width: 100%;
  border-radius: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const FreeShipping = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 65%;
  text-align: center;

  img {
    width: 50px;

    @media (max-width: 500px) {
      display: none;
    }
  }

  p {
    color: #ee0f0f;
    font-size: 25px;
    font-weight: 700;

    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
`;

const Offer = styled.div`
  width: 35%;
  text-align: center;

  p {
    color: #ee0f0f;
    font-size: 20px;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;

const InfoAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 15px;

  @media (max-width: 500px) {
    align-items: center;
  }
`;

const ItemInfo = styled.p`
  font-size: 44px;
  font-weight: 700;
  width: 100%;
  @media (min-width: 500px) and (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 36px;
    text-align: center;
  }
`;

const ItemDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #b7b3b3;
  width: 100%;
  @media (min-width: 500px) and (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    text-align: center;
  }
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  span {
    font-size: 28px;
    font-weight: 700;
    color: #0ed60e;
    text-align: start;
  }

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const ItemSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 50px;
  background-color: #ddd8d8;
  border-radius: 8px;

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  @media (max-width: 500px){
    width: 100%;
  }

  span {
    font-size: 26px;
    font-weight: 700;
    color: #908d8d;
    cursor: pointer;

    @media (max-width: 500px){
      font-size: 18px;
  }
  }


`;

const SizeInfo = styled.div`
  p {
    font-size: 18px;
    color: #52d236;
    font-weight: 700;
  }
`;
