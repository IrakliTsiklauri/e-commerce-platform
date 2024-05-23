import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import ImageSection from "./ImageSection";
import iconCart from "../images/icon-cart-mini.png";
import iconOk from "../images/photo-ok.webp";

const ItemDetail = () => {
  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);

  if (!item) {
    return (
      <div>
        <h1>item not found</h1>
      </div>
    );
  }

  {
    /* <img src={item.image} alt={item.name} /> */
  }

  return (
    <ItemSection>
      <ImageSection />
      <InfoSide>
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
          {item.currency} {item.price}
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
      </InfoSide>
    </ItemSection>
  );
};

export default ItemDetail;

const ItemSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  gap: 10px;
`;

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 40px;
`;

const Shipping = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  background-color: #feefe1;
  padding: 30px 20px;
  width: 100%;
`;

const FreeShipping = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 65%;
  text-align: center;

  img{
    width: 50px;
  }

  p {
    color: #ee0f0f;
    font-size: 25px;
    font-weight: 700;
  }
`;

const Offer = styled.div`
  width: 35%;
  text-align: center;

  p {
    color: #ee0f0f;
    font-size: 20px;
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
`;

const ItemDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const ItemPrice = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #0ed60e;
`;

const ItemQuantityAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* padding: 5px; */
  width: 160px;
  height: 56px;
  background-color: rgba(246, 248, 253, 1);
  border-radius: 8px;

  span {
    color: rgba(255, 126, 27, 1);
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
  }

  p {
    color: #000;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
  }
`;
const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 272px;
  height: 56px;
  background-color: rgba(255, 126, 27, 1);
  border-radius: 8px;
  gap: 10px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(192, 110, 48, 1);
    cursor: pointer;
  }

  p {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
`;
