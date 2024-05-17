import React from 'react'
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderSection = () => {
  return (
    <Header>
    <NavSide>
      <h1>sneakers</h1>
      <nav>
        <NavLink to="/">Collections</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </NavSide>
    <CartAndAvatar>
      <div>
        <img src={cart} alt="cart" />
      </div>
      <div>
        <img src={avatar} alt="" />
      </div>
    </CartAndAvatar>
  </Header>
  )
}

export default HeaderSection

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  h1 {
    font-size: 30px;
    color: rgba(29, 32, 38, 1);
  }
`;

const CartAndAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;