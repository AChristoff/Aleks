import './About.scss';
import { useContext } from 'react'
import { FaUserTie, FaPuzzlePiece, FaBriefcase, FaGraduationCap, FaFlag } from 'react-icons/fa'
import Rating from './partials/Rating'
import { Link } from 'react-router-dom'
import { HiOutlineDownload } from 'react-icons/hi';

//  For translations
import { LangContext } from '../../../context/langContext';
import pageDataEN from '../../../data/en/pageData'
import pageDataBG from '../../../data/bg/pageData'

function About() {

//Context
const { lang } = useContext(LangContext)
const { about } = lang === 'en' ? pageDataEN : pageDataBG;

  return (
    <div className='about'>
      <h3>{about.title}</h3>

      <section className='about-cover'>
        <img src='/assets/img/about-cover.png' alt='mail' />
      </section>

      <section className='general-info'>{about.generalInfo}</section>

      <section className='main-info'>
        <div className='left-col'>
          <section className='contacts'>
            <h5 className='about-subtitles'>
              <span className='about-icons'>
                <FaUserTie />
              </span>
              {about.contacts.title}
            </h5>
            <ul>
              <li>{about.contacts.address.title}</li>
              <li>{about.contacts.address.address}</li>
              <li>{about.contacts.phone}</li>
              <li>+359 888 199 889</li>
              <li>{about.contacts.email}</li>
              <li>
                <img src='/assets/img/email.svg' alt='mail' />
              </li>
            </ul>
          </section>

          <section className='skills'>
            <h5 className='about-subtitles'>
              <span className='about-icons'>
                <FaPuzzlePiece />
              </span>
              {about.skills.title}
            </h5>

            <ul>
              <li>
                <span>JavaScript</span> <Rating stars='5' />
              </li>
              <li>
                <span>HTML</span> <Rating stars='5' />
              </li>
              <li>
                <span>CSS</span> <Rating stars='5' />
              </li>
              <li>
                <span>React</span> <Rating stars='4' />
              </li>
              <li>
                <span>Vue</span> <Rating stars='3' />
              </li>
              <li>
                <span>Sass</span> <Rating stars='4' />
              </li>
              <li>
                <span>Node</span> <Rating stars='3' />
              </li>
              <li>
                <span>Express</span> <Rating stars='3' />
              </li>
              <li>
                <span>Mongo</span> <Rating stars='4' />
              </li>
              <li>
                <span>Linux</span> <Rating stars='4' />
              </li>
              <li>
                <span>Scrum</span> <Rating stars='3' />
              </li>
              <li>
                <span>Git</span> <Rating stars='5' />
              </li>
              <li>
                <span>Jira</span> <Rating stars='5' />
              </li>
              <li>
                <span>Bootstrap</span> <Rating stars='5' />
              </li>
              <li>
                <span>jQuery</span> <Rating stars='5' />
              </li>
            </ul>
          </section>

          <section className='languages'>
            <h5 className='about-subtitles'>
              <span className='about-icons'>
                <FaFlag />
              </span>
              {about.languages.title}
            </h5>

            <ul>
              <li>
                <span>{about.languages.en}</span> <Rating stars='4' />
              </li>
              <li>
                <span>{about.languages.bg}</span> <Rating stars='5' />
              </li>
            </ul>
          </section>
        
          <section className='cv'>
            <Link className='download-btn' to={`assets/img/cv/CV-${lang}-Aleksandar-Hristov-Front-End.pdf`} target="_blank" download>
              {about.cv.title} <HiOutlineDownload />
            </Link>
          </section>

        </div>

        <div className='right-col'>
          <section className='work-history'>
            <h5 className='about-subtitles'>
              <span className='about-icons'>
                <FaBriefcase />
              </span>
              {about.workHistory.title}
            </h5>

            <ul>
              <li>{about.workHistory.jobs.neterra.title}</li>
              <li>
                <span>{about.workHistory.jobs.neterra.period}</span> <span>{about.workHistory.jobs.neterra.employer}</span>
              </li>
              {
                about.workHistory.jobs.neterra.description.map((p, i) => (
                  <li className='left' key={i}>{p}</li>
                ))
              }
            </ul>

            <ul>
              <li className='left'>{about.workHistory.jobs.walltopia.title}</li>
              <li>
                <span>{about.workHistory.jobs.walltopia.period}</span> <span>{about.workHistory.jobs.walltopia.employer}</span>
              </li>

              <li className='position'>
                <span>{about.workHistory.jobs.walltopia.pm.time}</span> <span>{about.workHistory.jobs.walltopia.pm.title}</span>
              </li>
              {
                about.workHistory.jobs.walltopia.pm.description.map((p, i) => (
                  <li className='left' key={i}>{p}</li>
                ))
              }

              <li className='position'>
                <span>{about.workHistory.jobs.walltopia.teamLead.time}</span> <span>{about.workHistory.jobs.walltopia.teamLead.title}</span>
              </li>
              {
                about.workHistory.jobs.walltopia.teamLead.description.map((p, i) => (
                  <li className='left' key={i}>{p}</li>
                ))
              }
              
              <li className='position'>
                <span>{about.workHistory.jobs.walltopia.drafter.time}</span> <span>{about.workHistory.jobs.walltopia.drafter.title}</span>
              </li>
              {
                about.workHistory.jobs.walltopia.drafter.description.map((p, i) => (
                  <li className='left' key={i}>{p}</li>
                ))
              }
            </ul>
          </section>

          <section className='education'>
            <h5 className='about-subtitles'>
              <span className='about-icons'>
                <FaGraduationCap />
              </span>
              {about.education.title}
            </h5>

            <ul>
              <li className='left'>{about.education.softUni.specialty}</li>
              <li>
                <span className='left period'>{about.education.softUni.period}</span> <span>{about.education.softUni.university}</span>
              </li>
            </ul>

            <ul>
              <li className='left'>{about.education.forestry.specialty}</li>
              <li>
                <span className='left period'>{about.education.forestry.period}</span> <span className="right">{about.education.forestry.university}</span>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  )
}

export default About;