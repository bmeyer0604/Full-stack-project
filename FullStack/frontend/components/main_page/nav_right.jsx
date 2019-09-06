import React from 'react';
import { Link } from 'react-router-dom';

const NavRight = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="navbarRight">
        <img className="headerIcon" src="/images/top_images_icon.svg"/>
        <Link to={'/login'}>
            <div className="signinButton" href="#">Sign in</div>
        </Link>
        <Link to={`/signup`}>
            <button className="signupButton">Sign up</button>
        </Link>
    </div>
  );
  const personalGreeting = () => (
    <div className="header-group">
        <img className="headerIcon" src="/images/top_images_icon.svg"/>
        <img className="headerIcon" src="/images/messages.svg"/>
        <img className="headerIcon" src="/images/notifications.svg"/>
        <div className="header-username">{currentUser.username}</div>
        <button className="headerLogoutButton" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default NavRight;