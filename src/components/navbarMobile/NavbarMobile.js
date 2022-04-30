import React from "react";
import { AiOutlineHome, AiOutlineFileSearch } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  DivButtons,
  HomeButton,
  Icon,
  NavMobile,
  Div,
} from "./NavbarMobileStyle";

export const NavbarMobile = () => {
  return (
    <>
      <Div />
      <NavMobile>
        <DivButtons>
          <HomeButton>
            <Link to="/">
              <Icon>
                <AiOutlineHome />
              </Icon>
              <small>Inicio</small>
            </Link>
          </HomeButton>
          <HomeButton>
            <Link to="/products">
              <Icon>
                <AiOutlineFileSearch />
              </Icon>
              <small>Productos</small>
            </Link>
          </HomeButton>
        </DivButtons>
      </NavMobile>
    </>
  );
};
