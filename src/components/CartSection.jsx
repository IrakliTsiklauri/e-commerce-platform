import React from "react";
import styled from "styled-components";

const CartSection = ({ isOpen }) => {
  return (
    <CartSectionContainer isOpen={isOpen}>
      <CartHeader>
        <h2>Cart</h2>
      </CartHeader>
    </CartSectionContainer>
  );
};

export default CartSection;

const CartSectionContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 360px;
  height: 256px;
  background-color: #fff;
  position: absolute;
  top: 80px;
  border-radius: 8px;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
`;

const CartHeader = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(228, 233, 242, 1);
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 15px;

  h2 {
    color: rgba(29, 32, 38, 1);
    font-size: 16px;
    font-weight: 700;
  }
`;
