import React from "react";
import styled from "styled-components";

const Collections = () => {
  return (
    <AllProducts>
      <TopSide>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </TopSide>
      <MidSide>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </MidSide>
      <BottomSide>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </BottomSide>
    </AllProducts>
  );
};

export default Collections;

const AllProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  width: 100%;
`;

const TopSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MidSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BottomSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  background-color: #ece9e9;
  width: 300px;
  height: 300px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  }
`;
