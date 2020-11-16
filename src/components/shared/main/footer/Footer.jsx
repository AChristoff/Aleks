import './Footer.scss';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="app-footer">
      <section>&copy;{ ` 2019-${currentYear}` }</section>
      <section className='social-links'>
        <a href="https://github.com/AChristoff" target="_blank" rel="noreferrer">
          <FaGithub className="footer-icons"/>
        </a>
        <a href="https://www.linkedin.com/in/aleksandar-hristov-812340122/" target="_blank" rel="noreferrer">
          <FaLinkedin className="footer-icons"/>
        </a>
      </section>
    </footer>
  );
}

export default Footer;