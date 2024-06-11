import React from "react";

import styled from "styled-components";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";

const ItemDetail = () => {
  return (
    <ItemSection>
      <ImageSection />
      <InfoSection />
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

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    height: 52%;
  }

  @media (max-width: 500px)  {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    height: 52%;
  }
`;
