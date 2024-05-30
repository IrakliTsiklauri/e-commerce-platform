import React from "react";
import styled from "styled-components";

const Checkout = () => {
  return (
    <CheckoutContainer>
      <Form>
        <InputDiv>
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Full Name" />
        </InputDiv>
        <InputDiv>
          <label>Address</label>
          <input type="text" name="address" placeholder="Address" />
        </InputDiv>
        <InputDiv>
          <label>Card Number</label>
          <input type="text" name="cardNumber" placeholder="Card Number" />
        </InputDiv>
        <InputDiv>
          <label>CVV</label>
          <input type="text" name="cvv" placeholder="CVV" />
        </InputDiv>
        <SubBtn type="submit">Submit</SubBtn>
      </Form>
      <CeckoutInfo>Hello</CeckoutInfo>
    </CheckoutContainer>
  );
};

export default Checkout;

const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 30px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 400px;

  input {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #e7e2e2;
    font-size: 18px;
  }
`;

const SubBtn = styled.button`
  width: 400px;
  padding: 15px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 126, 27, 1);

  &:hover {
    cursor: pointer;
    background-color: #f49a56;
  }
`;

const CeckoutInfo = styled.div``;
