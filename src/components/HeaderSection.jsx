import React from "react";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/newlogo.png";

const HeaderSection = () => {
  return (
    <Header>
      <NavSide>
        <LogoImg>
          <img src={logo} alt="logo" />
        </LogoImg>
        <Navigation>
          <NavigationLink to="/">Collections</NavigationLink>
          <NavigationLink to="/collections/Men Clothes">Men</NavigationLink>
          <NavigationLink to="/collections/Women Clothes">Women</NavigationLink>
          <NavigationLink to="/collections/Children Clothes">
            Children
          </NavigationLink>
          <NavigationLink to="/about">About</NavigationLink>
          <NavigationLink to="/contact">Contact</NavigationLink>
        </Navigation>
      </NavSide>
      <CartAndAvatar>
        <Cart>
          <img src={cart} alt="cart" />
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
  padding: 40px 0;
  border-bottom: 1px solid rgba(228, 233, 242, 1);
`;

const NavSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const LogoImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 150px;
    height: 75px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: rgba(105, 112, 125, 1);
  font-weight: 400;

  &.active {
    font-weight: 700;
  }
`;

const CartAndAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 21px;
    height: 21px;
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
