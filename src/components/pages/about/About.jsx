import './About.scss';
import { useContext } from 'react'
import { FaUserTie, FaPuzzlePiece, FaBriefcase, FaGraduationCap, FaFlag } from 'react-icons/fa';
import Rating from './partials/Rating';
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
                about.workHistory.jobs.neterra.description.map((p) => (
                  <li className='left'>{p}</li>
                ))
              }
            </ul>

            <ul>
              <li>Project Manager | Team lead | Drafter</li>
              <li>
                <span>2014 - 2019</span> <span>WALLTOPIA AD</span>
              </li>
              <li className='position'>
                <span>1Y</span> <span>Project Manager</span>
              </li>
              <li className='left'>Complete organization of the project timeline from beginning to end</li>
              <li className='left'>Keeping in touch with customers</li>
              <li className='left'>Presence at management briefings with completed reports</li>
              <li className='left'>Requesting and selecting transport for all materials</li>
              <li className='left'>Providing tickets, lodgings and machines needed for technicians in different countries</li>
              <li className='left'>Available for permanent contact with groups of technicians 24/7</li>
              <li className='left'>Working in a dynamic and multicultural environment</li>
              <li className='position'>
                <span>3Y</span> <span>Team lead</span>
              </li>
              <li className='left'>Drawing up work schedules and task assignments for department employees</li>
              <li className='left'>Weekly presence at management briefings with completed work reports</li>
              <li className='left'>Preparation of complete technical documentation - production and installation drawings accompanied by detailed specifications for production, loading and assembly</li>
              <li className='left'>Quality control of the entire production of the department</li>
              <li className='left'>Process Management - analyzing, automating and improving workflows to: increase productivity and reduce the possibility of errors</li>
              <li className='left'>Research and development (R & D) - creating new products and details. Implementing new technologies and refining existing ones. Testing and communicating with international laboratories to certify new products</li>
              <li className='left'>Daily consultations with employees in the department of urgent cases in their work</li>
              <li className='left'>Permanent work with design, architecture, engineering, administration software - such as AutoCAD, AdvanceSteel, SketchUp, Excel, SAP and others</li>
              <li className='position'>
                <span>1Y</span> <span>Drafter</span>
              </li>
              <li className='left'>Preparation of complete technical documentation</li>
              <li className='left'>R & D - creating new products and details</li>
              <li className='left'>Project communication with foreign clients</li>
              <li className='left'>Permanent work with design, architecture, engineering, administration software - such as AutoCAD, AdvanceSteel, SketchUp, Excel, SAP and more</li>
            </ul>
          </section>

          <section className='education'>
            <h5 className='about-subtitles'>
              <span className='about-icons'>
                <FaGraduationCap />
              </span>
              Education
            </h5>

            <ul>
              <li>JavaScript Web Developer</li>
              <li>
                <span>2018 - 2020</span> <span>SoftUni - Sofia</span>
              </li>
            </ul>

            <ul>
              <li>Furniture Design & Engineering</li>
              <li>
                <span>2006 - 2010</span> <span>University of Forestry - Sofia</span>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  )
}

export default About;