import React from "react";
import { NavTabWrapper } from "./styles";
import { Link } from "react-router-dom";

const NavTabs: React.FC = () => {
  return (
    <NavTabWrapper>
      <Link className="nav-text" to='/'>Home</Link>
      <p className="nav-text">/</p>
      <Link className="nav-text" to='/'>Product</Link>
      <p className="nav-text">/</p>
      <Link className="nav-text" to='/'>Watches</Link>
      <p className="nav-text">/</p>
      <Link className="nav-text-hl" to='/detail'>Way Kambas Mini Ebony</Link>
    </NavTabWrapper>
  )
}

export default NavTabs;