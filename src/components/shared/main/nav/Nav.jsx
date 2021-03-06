import { NavLink } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import Burger from './partials/Burger'
import './Nav.scss'

//  For translations
import { LangContext } from '../../../../context/langContext';
import pageDataEN from '../../../../data/en/pageData.json'
import pageDataBG from '../../../../data/bg/pageData.json'

function Nav() {
  //State
  let [navClick, setNavClick] = useState(0)

  //Context
  const { lang, updateLangContext } = useContext(LangContext);
  const { nav } = lang === 'en' ? pageDataEN : pageDataBG;

  const toggleNav = () => {
    setNavClick(++navClick)
  }

  const changeLang = () => {
    const currentLang = lang === 'en' ? 'bg' : 'en'
    updateLangContext('lang', currentLang)
    setNavClick(++navClick)
  }

  const handleFocus = (e) => {
    if (!document.querySelector('.nav-list').contains(e.target) && !document.querySelector('.header-wrapper').contains(e.target)){
      setNavClick(++navClick)
    } 
  }

  //Component did mount
  useEffect(() => {
    window.addEventListener('click', handleFocus)

     //Component Will Unmount
     return () => {
      window.removeEventListener('click', handleFocus)
    };
  },[])

  return (
    <nav className='site-nav'>
      <Burger navClick={navClick} />

      <ul className="nav-list">
        <li className='home-btn'>
          <NavLink to='/' exact activeClassName='active' onClick={toggleNav}>
            {nav.home}
          </NavLink>
        </li>

        <li className='all-offers-tab'>
          <NavLink to='/about' exact onClick={toggleNav}>
          {nav.about}
          </NavLink>
        </li>

        <li className='all-offers-tab'>
          <NavLink to='/portfolio' exact onClick={toggleNav}>
            {nav.portfolio}
          </NavLink>
        </li>

        <li className='all-offers-tab lang-tab' onClick={changeLang}>
          <span className="lang">{nav.lang}</span>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
