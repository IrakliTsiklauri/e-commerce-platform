import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import ImageSection from "./ImageSection";

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

  return (
    <ItemSection>
      <ImageSection />
      <InfoSide>
        <CompanyName>{item.company}</CompanyName>
        <ItemInfo>{item.info}</ItemInfo>
        {/* <img src={item.image} alt={item.name} /> */}
        <p>კატეგორია: {item.category}</p>
        <p>
          ფასი: {item.price} {item.currency}
        </p>
        <p>{item.description}</p>
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
`;

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const CompanyName = styled.h2`
  color: rgba(255, 126, 27, 1);
  font-size: 18px;
  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;
`;

const ItemInfo = styled.p`
  font-size: 44px;
  font-weight: 700;
`;
