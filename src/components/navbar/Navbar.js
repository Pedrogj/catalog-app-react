import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "./../../img/logo.png";

import {
  Wrapper,
  Content,
  NavLogo,
  MenuIcon,
  ImgLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarStyled";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const Collapse = click ? <FaTimes /> : <FaBars />;

  return (
    <>
      <Wrapper>
        <Content>
          <Link to="/">
            <NavLogo>
              <ImgLogo src={logoImg} />
            </NavLogo>
          </Link>
          <MenuIcon onClick={() => handleClick()}>{Collapse}</MenuIcon>
          <NavMenu click={click}>
            <Link to="/">
              <NavItem onClick={() => handleClick()}>
                <NavLinks>Inicio</NavLinks>
              </NavItem>
            </Link>
            <Link to="/products">
              <NavItem onClick={() => handleClick()}>
                <NavLinks>Productos</NavLinks>
              </NavItem>
            </Link>
          </NavMenu>
        </Content>
      </Wrapper>
    </>
  );
};
