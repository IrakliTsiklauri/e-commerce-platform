import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data.json";

const Checkout = () => {
  const { itemId } = useParams();

  const item = data.find((item) => item.id === itemId);

  return (
    <CheckoutContainer>
      <Form>
        <InputDiv>
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Full Name" />
        </InputDiv>
        <InputDiv>
          <label>City/Region</label>
          <input type="text" name="city" placeholder="City / Region" />
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
        <SubBtn type="submit">Payment Of Value</SubBtn>
      </Form>
      <CheckoutInfo>
        {item ? (
          <>
            <h2>Company: {item.company}</h2>
            <p>Item Name: {item.name}</p>
            <p>
              Price: {item.price} {item.currency}
            </p>
            <img src={item.images.image} alt={item.category} />
          </>
        ) : (
          <p>No item selected</p>
        )}
      </CheckoutInfo>
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
    outline-color: #18db18;
  }
`;

const SubBtn = styled.button`
  width: 400px;
  padding: 15px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 126, 27, 1);

  &:hover {
    cursor: pointer;
    background-color: #f49a56;
  }
`;

const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
  margin-left: 20px;
`;
