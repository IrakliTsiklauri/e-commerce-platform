import React, { useState, useContext } from "react";
import styled from "styled-components";
import iconCart from "../images/icon-cart-mini.png";
import { CartContext } from "./AddToCart";
import data from "../data.json"
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const AddToCartSection = () => {
  const { itemId } = useParams();
  const item = data.find((item) => item.id === itemId);

  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        id: "1",
        name: "New items have been added to the cart",
        price: Number(item.price),
        quantity,
        image: item.images.image
      });
      toast.success("New Items have been Added To The Cart")
    }else{
        toast.error("Quantity must be greater than 0 to add to cart")
    }
  };

  return (
    <ItemQuantityAndCart>
      <ItemQuantity>
        <span onClick={handleDecrease}>-</span>
        <p>{quantity}</p>
        <span onClick={handleIncrease}>+</span>
      </ItemQuantity>
      <AddToCartItems onClick={handleAddToCart}>
        <img src={iconCart} alt="iconCart" />
        <p>Add to cart</p>
      </AddToCartItems>
      <ToastContainer/>
    </ItemQuantityAndCart>
  );
};

export default AddToCartSection;

const ItemQuantityAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  height: 56px;
  background-color: rgba(246, 248, 253, 1);
  border-radius: 8px;

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }

  span {
    color: rgba(255, 126, 27, 1);
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;

    @media (min-width: 500px) and (max-width: 900px) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      font-size: 30px;
    }
  }

  p {
    color: #000;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;

    @media (min-width: 500px) and (max-width: 900px) {
      font-size: 30px;
    }
  }
`;

const AddToCartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 56px;
  background-color: rgba(255, 126, 27, 1);
  border-radius: 8px;
  gap: 10px;
  transition: 0.3s;

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }

  &:hover {
    background-color: rgba(255, 171, 106, 1);
    cursor: pointer;
  }

  p {
    color: #fff;
    font-size: 16px;
    font-weight: 700;

    @media (min-width: 500px) and (max-width: 900px) {
      font-size: 16px;
    }
  }
`;
