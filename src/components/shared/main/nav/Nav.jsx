import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import Burger from './partials/Burger'
import './Nav.scss'
import { LangContext } from '../../../../context/langContext';

function Nav() {
  //State
  let [navClick, setNavClick] = useState(0)

  //Context
  const { lang, updateLangContext } = useContext(LangContext);

  const toggleNav = () => {
    setNavClick(++navClick)
  }

  const changeLang = () => {
    const currentLang = lang === 'en' ? 'bg' : 'en'
    updateLangContext('lang', currentLang)
  }

  return (
    <nav className='site-nav'>
      <Burger navClick={navClick} />

      <ul>
        <li className='home-btn'>
          <NavLink to='/' exact activeClassName='active' onClick={toggleNav}>
            Home
          </NavLink>
        </li>

        <li className='all-offers-tab'>
          <NavLink to='/about' exact onClick={toggleNav}>
            About
          </NavLink>
        </li>

        <li className='all-offers-tab'>
          <NavLink to='/portfolio' exact onClick={toggleNav}>
            Portfolio
          </NavLink>
        </li>

        <li className='all-offers-tab lang-tab' onClick={changeLang}>
          <span className="lang">{lang}</span>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
