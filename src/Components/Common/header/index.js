import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <div className="caret-icon"><i className="fi fi-sr-caret-down absolute-center caret-icon"></i></div>
            <div className="location_search-separator"></div>
            <div className="header-search-bar">
              <i class="fi fi-rr-search absolute-center search-icon"></i>
              <input
                placeholder="Search for restaurant, cousine or a dish"
                className="search-input"
              />
            </div>
          </div>
        </div>
        <div className="profile-wrapper">
            <img src="https://b.zmtcdn.com/data/user_profile_pictures/298/d6e2aa922e9e49bcbd7cc244a808a298.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Profile photp" className="header-profile-image"/>
            <div className="header-username">
              Sachin
            </div>
            <div className="header-arrow-down">
            <i class="fi fi-br-angle-down absolute-center "></i>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
