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
        <SubBtn type="submit">Payment</SubBtn>
      </Form>
      <CheckoutInfo>
        {item ? (
          <>
            <CompanyName>
              {" "}
              <p>Company:</p> {item.company}
            </CompanyName>
            <ItemName>
              <p>Item Name: </p> {item.category}
            </ItemName>
            <ItemInfo>
              <p>Item Inforamtion: </p> {item.info}
            </ItemInfo>
            <ItemDescription>
              <p>Item Description: </p>
              {item.description}
            </ItemDescription>
            <ItemPrice>
              <p>Price: </p> {item.price} {item.currency}
            </ItemPrice>
            <img src={item.images.image} alt={item.category} />
          </>
        ) : (
          <NoSelected>No item selected</NoSelected>
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

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
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

    @media (min-width: 500px) and (max-width: 900px) {
      padding: 10px;
      font-size: 14px;
    }
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
  gap: 30px;
  margin-left: 20px;

  img {
    width: 100px;
    height: 100px;
  }
`;

const CompanyName = styled.h2`
  display: flex;
  gap: 5px;
  color: rgba(255, 126, 27, 1);
  font-size: 22px;
  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;

  p {
    color: red;
  }
`;

const ItemName = styled.p`
  display: flex;
  gap: 5px;
  color: grey;
  font-size: 18px;

  p {
    color: red;
  }
`;

const ItemInfo = styled.p`
  display: flex;
  gap: 5px;
  color: grey;
  font-size: 18px;

  p {
    color: red;
  }
`;

const ItemDescription = styled.p`
  display: flex;
  gap: 5px;
  color: grey;
  font-size: 12px;

  p {
    color: red;
  }
`;

const ItemPrice = styled.p`
  display: flex;
  gap: 5px;
  font-size: 28px;
  font-weight: 700;
  color: #0ed60e;
  text-align: start;
`;

const NoSelected = styled.p`
  font-size: 36px;
  color: red;
`;
