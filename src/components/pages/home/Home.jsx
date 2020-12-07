import {Link} from "react-router-dom";
import './Home.scss'

import { useContext } from 'react'
import { LangContext } from '../../../context/langContext';
import pageDataEN from '../../../data/en/pageData'
import pageDataBG from '../../../data/bg/pageData'

function Home() {

//Context
const { lang } = useContext(LangContext)
const { home } = lang === 'en' ? pageDataEN : pageDataBG

  return (
    <section className="jumbotron">
      
      <h6>{home.hello}</h6>

      <h1>{home.name}</h1>

      <p className="stack">{home.jobTitle}</p>

      <Link to={'/portfolio'} className="home-cover">
        <img src="/assets/img/home-cover.png" alt="home-cover" />
      </Link>

      <h6>
        <span className="more">{home.more}</span>
        <Link to={'/about'}>{home.link}</Link>
      </h6>

    </section>
  );
}

export default Home;