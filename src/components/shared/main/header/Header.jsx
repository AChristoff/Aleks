import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../nav/Nav';
import './Header.scss';

function Header() {

  //State 
  const [scrolled, setScrolled] = useState(false);

  //Component did mount
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 1;
      if (!isTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    })

    return () => {
      window.removeEventListener('scroll');
    }
  },[]);
  
  return (
    <header className={scrolled ? 'app-header active' : 'app-header'}>
      <div className="header-wrapper">

        <Link to={'/home'} className="logo">
          <img src="/assets/img/aleksov-logo.svg" alt="home-cover" />
        </Link>

        <Nav />

      </div>
    </header>
  );
}

export default Header;