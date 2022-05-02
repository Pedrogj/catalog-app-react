import React from "react";
import { AiOutlineHome, AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { routes } from "../../routers/Routes";
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
            <Link to={routes.root}>
              <Icon>
                <AiOutlineHome />
              </Icon>
              <small>Inicio</small>
            </Link>
          </HomeButton>
          <HomeButton>
            <Link to={routes.allProducts}>
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
