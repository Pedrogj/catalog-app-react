import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./../../img/logo.png";

import {
  Wrapper,
  Content,
  NavLogo,
  ImgLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarStyled";

export const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Link to="/">
            <NavLogo>
              <ImgLogo src={logoImg} />
            </NavLogo>
          </Link>
          <NavMenu>
            <Link to="/">
              <NavItem>
                <NavLinks>Inicio</NavLinks>
              </NavItem>
            </Link>
            <Link to="/products">
              <NavItem>
                <NavLinks>Productos</NavLinks>
              </NavItem>
            </Link>
          </NavMenu>
        </Content>
      </Wrapper>
    </>
  );
};
