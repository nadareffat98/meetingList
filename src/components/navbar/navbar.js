import React, { useState } from "react";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };
const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={`sidenav-wrapper ${showSidebar ? "": "active" }`}>
      <button
        type="button"
        className={`navbar-toggle custom-toggle collapsed ${showSidebar ? "active": "" }`}
        onClick={toggleSidebar}
      >
        <span className="material-icons">arrow_back_ios</span>
      </button>

      <div
        id="navbar"
        className={`bg-white sidenav side-menu-container ${showSidebar ? "active" :"" }`}
      >
        <div className="d-flex profile-container cursor-pointer">
          <img className="user-img " alt="" src="users/profile.png" />
          <div className="d-flex flex-column  user-info">
            <span className="name">Admin </span>
            <span className="description">Professional Account</span>
          </div>
          <i className="material-icons">more_vert</i>
        </div>
        <ul className="nav navbar-nav">
          <li className={activeNavItem === "home" ? "active" : ""}>
            <a href="#" onClick={() => handleNavItemClick("home")}>
              <span className="material-icons">home</span> Home
            </a>
          </li>
          <li className={activeNavItem === "calendar" ? "active" : ""}>
            <a href="#" onClick={() => handleNavItemClick("calendar")}>
              <span className="material-icons">date_range</span> My Calendar
            </a>
          </li>
          <li className={activeNavItem === "support" ? "active" : ""}>
            <a href="#" onClick={() => handleNavItemClick("support")}>
              <span className="material-icons">support_agent</span> Support
            </a>
          </li>
          <li className={activeNavItem === "settings" ? "active" : ""}>
            <a href="#" onClick={() => handleNavItemClick("settings")}>
              <span className="material-icons">settings</span> Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
