import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Collections = () => {
  return (
    <Main>
      {data.map((item, index) => (
        <Product key={index}>
          <img src={item.image} alt="shoe" />
          <h4>{item.name}</h4>
          <p>Shoes - {item.category.shoes}</p>
          <p>
            Price: {item.price} {item.currency}
          </p>
        </Product>
      ))}
    </Main>
  );
};

export default Collections;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efeeee;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  width: 300px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 280px;
    height: 280px;
    border-radius: 8px;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
