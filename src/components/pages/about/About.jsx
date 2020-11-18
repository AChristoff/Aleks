import './About.scss';
import { FaUserTie, FaPuzzlePiece, FaBriefcase, FaGraduationCap, FaFlag } from 'react-icons/fa';
import Rating from './partials/Rating';

function About() {
  return (
    <div className="about">
      <h3>ABOUT PAGE</h3>

      <section className="general-info">General info</section>

      <section className="main-info">
        <div className="left-col">
          <section className="contacts">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaUserTie />
              </span>
              Contacts
            </h5>
            <ul>
              <li>Address</li>
              <li>1618 Sofia, Bulgaria</li>
              <li>Phone</li>
              <li>+359 888 199 889</li>
              <li>E-mail</li>
              <li>my-email@gmail.com</li>
            </ul>
          </section>

          <section className="skills">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaPuzzlePiece />
              </span>
              Skills
            </h5>

            <ul>
              <li>
                <span>JavaScript</span> <Rating stars="5" />
              </li>
              <li>
                <span>HTML</span> <Rating stars="5" />
              </li>
              <li>
                <span>CSS</span> <Rating stars="5" />
              </li>
              <li>
                <span>React</span> <Rating stars="4" />
              </li>
              <li>
                <span>Vue</span> <Rating stars="2" />
              </li>
              <li>
                <span>Sass</span> <Rating stars="3" />
              </li>
              <li>
                <span>Node</span> <Rating stars="3" />
              </li>
              <li>
                <span>Express</span> <Rating stars="3" />
              </li>
              <li>
                <span>Mongo</span> <Rating stars="4" />
              </li>
              <li>
                <span>Linux</span> <Rating stars="4" />
              </li>
              <li>
                <span>Scrum</span> <Rating stars="3" />
              </li>
              <li>
                <span>Git</span> <Rating stars="5" />
              </li>
              <li>
                <span>Jira</span> <Rating stars="5" />
              </li>
              <li>
                <span>Bootstrap</span> <Rating stars="5" />
              </li>
              <li>
                <span>jQuery</span> <Rating stars="5" />
              </li>
            </ul>
          </section>

          <section className="languages">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaFlag />
              </span>
              Languages
            </h5>

            <ul>
              <li>
                <span>English</span> <Rating stars="4" />
              </li>
              <li>
                <span>Bulgarian</span> <Rating stars="5" />
              </li>
            </ul>
          </section>
        </div>

        <div className="right-col">
          <section className="work-history">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaBriefcase />
              </span>
              Work History
            </h5>

            <ul>
              <li>Front-End Developer</li>
              <li><span>2019 - Present</span> <span>NETERRA Ltd.</span></li>
              <li>Develop the Front-end of Enterprise Resource Planning Software ERP</li>
              <li>Develop Landing Pages for company events</li>
              <li>JavaScript | CSS | HTML</li>
              <li>Bootstrap | jQuery</li>
              <li>Responsive Design</li>
              <li>Strong Git management</li>
              <li>Excellent communication with QA team</li>
              <li>Planning sprints using Scrum based methodology</li>
            </ul>

            <ul>
              <li>Project Manager | Team lead | Engineer</li>
              <li><span>2014 - 2019</span> <span>WALLTOPIA AD</span></li>
              <li><span>1y</span> <span>Project Manager</span></li>
              <li><span>3y</span> <span>Head of Non-steel Constructions</span></li>
              <li><span>1y</span> <span>Engineer in Non-Steel Constructions Department</span></li>
            </ul>
          </section>

          <section className="education">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaGraduationCap />
              </span>
              Education
            </h5>

            <ul>
              <li><span>2018 - 2020</span> <span>SoftUni - JavaScript Web Developer</span></li>
              <li><span>2006 - 2010</span> <span>University of Forestry - Engineering Design - Interior and furniture design. Graduate with honors</span></li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}

export default About;