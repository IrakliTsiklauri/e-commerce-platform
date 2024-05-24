import React from "react";
import styled from "styled-components";
import data from "../data.json";
import { useParams, useNavigate } from "react-router-dom";

const Collections = ({ category }) => {
  const { category: paramCategory } = useParams();
  const navigate = useNavigate();
  console.log(navigate);
  const selectedCategory = category || paramCategory;

  const filteredData = selectedCategory
    ? data.filter((item) => item.name === selectedCategory)
    : data;

  const handleItemClick = (itemId) => {
    navigate(`/items/${itemId}`);
  };

  return (
    <Main>
      {filteredData.map((item) => (
        <Product key={item.id} onClick={() => handleItemClick(item.id)}>
          <img src={item.images.image} alt={item.name} />
          <h4>{item.name}</h4>
          <ItemCategory>Category - {item.category}</ItemCategory>
          <ItemPrice>
            <span>Price:</span> {Number(item.price).toFixed(2)} {item.currency}
          </ItemPrice>
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

  @media (min-width: 600px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
   
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #efeeee;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  width: 300px;
  height: 400px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 280px;
    height: 280px;
    border-radius: 8px;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    color: orange;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ItemCategory = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #c7c751;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: green;

  span {
    font-size: 18px;
    font-weight: 700;
    color: red;
  }
`;
