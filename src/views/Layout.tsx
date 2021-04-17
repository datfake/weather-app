import React from "react";
import Header from "../components/header/Header";
import Routes from "../router/Router";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default Layout;
