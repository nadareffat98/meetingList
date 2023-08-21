import React from "react";

const Header = () => (
  <div>
    <nav className="navbar navbar-light bg-white px-3 py-3 d-flex justify-content-between">
      <div className="row logo-container align-items-center w-50">
        <a  href="#" className="navbar-brand col-md-4 col-3 mr-0 p-0"><h4 className="mb-0">XYZ</h4></a>
        <form className="form-inline col-md-8 col-8 position-relative p-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <i className="material-icons search-icon">search</i>
        </form>
      </div>

      <div className="w-50 d-flex justify-content-end header-container">
      <i className="material-icons">language</i>
        <i className="material-icons-outlined">notifications</i>
        <div className="d-flex profile-container cursor-pointer">
        <img className="user-img "  alt="" src="users/profile.png"/>
          <div className="d-flex flex-column  user-info">
            <span className="name">Admin </span>
            <span className="description">Professional Account</span>
          </div>
          <i className="material-icons">more_vert</i>


        </div>

      </div>
    </nav>
  </div>
);

export default Header;
