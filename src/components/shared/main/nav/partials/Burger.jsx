import './Burger.scss'
import { useState, useEffect } from 'react';

function Burger({navClick = false}) {
  
  //State
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };
  
  //Component did update
  useEffect(() => {
    setActive(false);
  }, [navClick])

  return (
    <div className={`icon-wrapper ${active ? 'active' : ''}`} onClick={toggleNav}>
      <div className="menu-icon"></div>
    </div>
  );
}

export default Burger;