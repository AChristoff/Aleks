import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Burger from './partials/Burger'
import './Nav.scss'
import { NavContext } from '../../../../context/nav-context.js';


function Nav() {

  //Context
  const {active} = useContext(NavContext);

  return (
    <nav className="site-nav">

      <Burger />

      <ul className={active ? 'active' : ''}>
        <li className="home-btn">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>

        <li className="all-offers-tab">
          <NavLink to="/about" exact>
            About
          </NavLink>
        </li>

        <li className="all-offers-tab">
          <NavLink to="/portfolio" exact>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


export default Nav;
