import React, { useState } from "react";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/familyLogo.jpg";
import CartSection from "./CartSection";

const HeaderSection = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Header>
      <NavSide>
        <LogoImg>
          <NavigationLink to="/">
            <img src={logo} alt="logo" />
          </NavigationLink>
        </LogoImg>
        <BurgerMenu onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </BurgerMenu>
        <Navigation isOpen={isMenuOpen}>
          <NavigationLink to="/">Collections</NavigationLink>
          <NavigationLink to="/collections/Men Clothes">Men</NavigationLink>
          <NavigationLink to="/collections/Women Clothes">Women</NavigationLink>
          <NavigationLink to="/collections/Children Clothes">Children</NavigationLink>
          <NavigationLink to="/about">About</NavigationLink>
          <NavigationLink to="/contact">Contact</NavigationLink>
        </Navigation>
      </NavSide>
      <CartAndAvatar>
        <Cart onClick={toggleCart}>
          <img src={cart} alt="cart" />
          <CartSection isOpen={isCartOpen} />
        </Cart>
        <Avatar>
          <img src={avatar} alt="avatar" />
        </Avatar>
      </CartAndAvatar>
    </Header>
  );
};

export default HeaderSection;


const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid rgba(228, 233, 242, 1);
`;

const NavSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (min-width: 900px) and (max-width: 1200px) {
    gap: 30px;
  }
`;

const LogoImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 170px;
    height: 90px;

    @media (min-width: 900px) and (max-width: 1200px) {
      width: 100px;
      height: 50px;
    }
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  div {
    width: 25px;
    height: 3px;
    background-color: rgba(105, 112, 125, 1);
  }

  @media (min-width: 500px) and (max-width: 900px) {
    display: flex;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;

  @media (min-width: 900px) and (max-width: 1200px) {
    gap: 10px;
  }

  @media (min-width: 500px) and (max-width: 900px) {
    flex-direction: column;
    position: absolute;
    top: 60px; 
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1000;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: rgba(105, 112, 125, 1);
  font-weight: 400;

  &.active {
    font-weight: 700;
  }

  @media (min-width: 900px) and (max-width: 1200px) {
    font-size: 18px;
  }

  @media (min-width: 500px) and (max-width: 900px) {
    font-size: 20px;
    padding: 10px 0;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const CartAndAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (min-width: 900px) and (max-width: 1200px) {
    gap: 30px;
  }
`;

const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;

    @media (min-width: 900px) and (max-width: 1200px) {
      width: 25px;
      height: 25px;
    }
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;

    @media (min-width: 900px) and (max-width: 1200px) {
      width: 45px;
      height: 45px;
    }
  }
`;
