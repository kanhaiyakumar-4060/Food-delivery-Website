import React from 'react'; 
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      alt="Zomato-logo"
      className="header-logo"/>
      <div className="header-right">
        <div className='header-location-search-container'>
          <div className='location-Wrapper'>
            <div className='location-icon-name '>
            <i className="fa fa-map-marker absolute-center location-icon" aria-hidden="true"></i>   
            <div className='city'>Bangalore</div>
            </div>
            <i className="fa fa-caret-down absolute-center" aria-hidden="true"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className='header-searchbar'>
          <i className="fa fa-search absolute-center search-icon" aria-hidden="true"></i>
          <input placeholder='Search for restaurant, cauisine or a dish' className='search-input'/>
          </div>
        </div>
        <div className='profile-wrapper'>
          <img src="https://b.zmtcdn.com/images/user_avatars/wine_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile"
          className='header-profile-image' />
          <span className='header-username'>kanhaiya</span>
          <i className="fa fa-angle-down absolute-center profile-option-icon" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
