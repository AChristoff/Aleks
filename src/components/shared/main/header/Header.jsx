import {Link} from "react-router-dom";
import Nav from '../nav/Nav';
import './Header.scss';

function Header() {
  return (
    <header className="app-header">   

        <Link to={'/home'} className="logo">
          <img src="/assets/img/aleksov-logo.svg" alt="home-cover" />
        </Link>

        <Nav />

    </header>
  );
}

export default Header;