import './Burger.scss'
import { useContext } from 'react';
import { NavContext } from '../../../../../context/nav-context.js';

function Burger() {
  
  //Context
  const {active, updateNavContext} = useContext(NavContext);

  const toggleNav = () => {
    updateNavContext('active', !active);
  };

  return (
    <div className={`icon-wrapper ${active ? 'active' : ''}`} onClick={toggleNav}>
      <div className="menu-icon"></div>
    </div>
  );
}

export default Burger;