import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="site-nav">
      <ul>
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
