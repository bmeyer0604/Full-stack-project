import React from 'react';

const ImageNavRight = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="imageNavbarRight">
        <div className="signinButton" href="#">Sign in</div>
        <button className="signupButton">Sign up</button>
    </div>
  );
  const personalGreeting = () => (
    <div className="imageNavbarRight">
        <div className="header-username">{currentUser.username}</div>
        <button className="headerLogoutButton">Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default ImageNavRight;