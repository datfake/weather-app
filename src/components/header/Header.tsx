import * as React from "react";
import { Navbar } from "react-bootstrap";
import logo from "./../../assets/font/static/cloudy.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Weather Online
        </Navbar.Brand>
      </Navbar>
    </header>
  );
};

export default Header;
