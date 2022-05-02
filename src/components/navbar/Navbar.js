import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routers/Routes";
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
          <NavLogo>
            <ImgLogo src={logoImg} />
          </NavLogo>

          <NavMenu>
            <Link to={routes.root}>
              <NavItem>
                <NavLinks>Inicio</NavLinks>
              </NavItem>
            </Link>
            <Link to={routes.allProducts}>
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
