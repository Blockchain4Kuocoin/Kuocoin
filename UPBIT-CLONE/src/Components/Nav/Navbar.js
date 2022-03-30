import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import MyPage from "../Mypage/Mypage";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
        <FaIcons.FaBars onClick={showSidebar} color="#ff5478" />
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                {/* <AiIcons.AiOutlineClose onClick={showSidebar} /> */}
              </Link>
              <MyPage />
            </li>
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
