import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Burger from './partials/Burger';
import './Nav.scss';

function Nav() {

   //State
   let [navClick, setNavClick] = useState(0);

   const toggleNav = () => {
    setNavClick(++navClick);
  };

  return (
    <nav className="site-nav">

      <Burger navClick={navClick}/>

      <ul>
        <li className="home-btn">
          <NavLink to="/" exact activeClassName="active" onClick={toggleNav}>
            Home
          </NavLink>
        </li>

        <li className="all-offers-tab">
          <NavLink to="/about" exact onClick={toggleNav}>
            About
          </NavLink>
        </li>

        <li className="all-offers-tab">
          <NavLink to="/portfolio" exact onClick={toggleNav}>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


export default Nav;
