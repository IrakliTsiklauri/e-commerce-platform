import React from "react";
import iconCart from "../images/icon-cart-mini.png";
import iconOk from "../images/photo-ok.webp";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data.json";

const InfoSection = () => {
  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);

  if (!item) {
    return (
      <div>
        <h1>item not found</h1>
      </div>
    );
  }

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
        <ItemQuantityAndCart>
          <ItemQuantity>
            <span>-</span>
            <p>0</p>
            <span>+</span>
          </ItemQuantity>
          <AddToCart>
            <img src={iconCart} alt="iconCart" />
            <p>Add to cart</p>
          </AddToCart>
        </ItemQuantityAndCart>
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
`;

const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 40px;

  @media (min-width: 500px) and (max-width: 900px) {
    width: 100%;
  }
`;

const Shipping = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: #feefe1;
  padding: 30px 20px;
  width: 100%;
  border-radius: 10px;
`;

const FreeShipping = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 65%;
  text-align: center;

  img {
    width: 50px;
  }

  p {
    color: #ee0f0f;
    font-size: 25px;
    font-weight: 700;

    @media (max-width: 1240px) {
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

    @media (max-width: 1240px) {
      font-size: 12px;
    }
  }
`;

const CompanyName = styled.h2`
  color: rgba(255, 126, 27, 1);
  font-size: 18px;
  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;
`;

const InfoAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 15px;
`;

const ItemInfo = styled.p`
  font-size: 44px;
  font-weight: 700;
  width: 100%;

  @media (max-width: 1240px) {
    font-size: 30px;
  }

  @media (min-width: 500px) and (max-width: 900px) {
    text-align: center;
  }
`;

const ItemDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #b7b3b3;
  width: 100%;

  @media (max-width: 1240px) {
    font-size: 10px;
  }

  @media (min-width: 500px) and (max-width: 900px) {
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

    @media (max-width: 1240px) {
      font-size: 20px;
    }
  }

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const ItemQuantityAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* padding: 5px; */
  width: 25%;
  height: 56px;
  background-color: rgba(246, 248, 253, 1);
  border-radius: 8px;

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  span {
    color: rgba(255, 126, 27, 1);
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: 1240px) {
      font-size: 20px;
    }

    @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-size: 30px;
  }
  }

  p {
    color: #000;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: 1240px) {
      font-size: 20px;
    }

    @media (min-width: 500px) and (max-width: 900px) {
   font-size: 30px;
  }
  }
`;
const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 56px;
  background-color: rgba(255, 126, 27, 1);
  border-radius: 8px;
  gap: 10px;
  transition: 0.3s;

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  &:hover {
    background-color: rgba(255, 171, 106, 1);
    cursor: pointer;
  }

  p {
    color: #fff;
    font-size: 16px;
    font-weight: 700;

    @media (max-width: 1240px) {
      font-size: 10px;
    }

    @media (min-width: 500px) and (max-width: 900px) {
        font-size: 16px;
  }
  }
`;
