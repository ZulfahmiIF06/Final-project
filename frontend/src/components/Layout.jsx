import { Children } from "react";
import Navbar from "./NavbarComponent";
import Footer from "./FooterComponent";
import Homepage from "../pages/HomePage";

const Layout = ({ children }) => {

  return (
    <>
      <main>{children}</main>

    </>
  );
};

export default Layout;
