import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import React from "react";
import logo from "../assets/logo.svg";
import NavbarContainer from "../styled-components/NavbarStyle";
import CartButtons from "./CartButtons";
import { useProductContext } from "../context/products_context";

const Navbar = () => {
  const { openSidebar } = useProductContext();
  return (
    <NavbarContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} />
          </Link>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => {
              openSidebar();
            }}
          >
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
