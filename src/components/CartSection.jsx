import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./AddToCart";
import { useNavigate } from "react-router-dom";

const CartSection = ({ isOpen }) => {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckout = (itemId) => {
    navigate(`/checkout/${itemId}`);
  };

  return (
    <CartSectionContainer isOpen={isOpen}>
      <CartHeader>
        <h2>Cart</h2>
      </CartHeader>
      <CartContent>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id}>
              <CartInfo>
                <img src={item.image} alt={item.name} />
                <ItemDetails>
                  <p>{item.name}</p>
                  <p>
                    ₾{item.price.toFixed(2)} x {item.quantity} = ₾
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </ItemDetails>
              </CartInfo>
              <Checkout>
                <Button onClick={() => handleCheckout(item.id)}>Checkout</Button>
              </Checkout>
            </CartItem>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </CartContent>
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

const CartContent = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  gap: 20px;
`;

const CartInfo = styled.div`
  display: flex;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 15px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;

const ItemDetails = styled.div`
  p {
    margin: 0;
  }
`;

const Checkout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: rgba(255, 126, 27, 1);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
