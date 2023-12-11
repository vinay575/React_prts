import React from 'react';
import image1 from '../images/ajax.png';
import image2 from '../images/bootstrap.png';
import image3 from '../images/command.png';
import image4 from '../images/css3.png';
import image5 from '../images/git.png';
import image6 from '../images/html5.png';
import image7 from '../images/javascript.png';
import image8 from '../images/jquery.png';
import image9 from '../images/npm.png';
import image10 from '../images/react.png';
import image11 from '../images/sass.png';
import image12 from '../images/vs-code.png';
import '../style.css';
import  Star from './Stars';

const Skills = () => {
    return (
        <>
        <div className="sta"></div>
      <section className="star">
        <p className="pot">
          What My Programming Skills Included?<br />
          I develop simple, intuitive and responsive user interfaces that help users get things done with less effort and
          time with those technologies.
        </p>
        <section>
              <div className="skills-box" >

          <ul className="skills-list">

            <li>
              <div className="skill-card">
                <div className="tooltip">HTML5</div>

                <div className="card-icon">
                  <img src={image6} alt="HTML5 logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">CSS3</div>

                <div className="card-icon">
                  <img src={image4} alt="CSS3 logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">JavaScript</div>

                <div className="card-icon">
                  <img src={image7} alt="JavaScript logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">jQuery</div>

                <div className="card-icon">
                  <img src={image8} alt="jQuery logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Bootstrap</div>

                <div className="card-icon">
                  <img src={image2} alt="Bootstrap logo"/>
                </div>
              </div>
            </li>

          

            <li>
              <div className="skill-card">
                <div className="tooltip">React</div>

                <div className="card-icon">
                  <img src={image10} alt="React logo"/>
                </div>
              </div>
            </li>
    

            <li>
              <div className="skill-card">
                <div className="tooltip">SASS</div>

                <div className="card-icon">
                  <img src={image11} alt="SASS logo"/>
                </div>
              </div>
            </li>

         

            <li>
              <div className="skill-card">
                <div className="tooltip">Ajax</div>

                <div className="card-icon">
                  <img src={image1} alt="Ajax logo"/>
                </div>
              </div>
            </li>

    
            <li>
              <div className="skill-card">
                <div className="tooltip">Git</div>

                <div className="card-icon">
                  <img src={image5} alt="Git logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Npm</div>

                <div className="card-icon">
                  <img src={image9} alt="Npm logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Command Line</div>

                <div className="card-icon">
                  <img src={image3} alt="Command Line logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">VS Code</div>

                <div className="card-icon">
                  <img src={image12} alt="VS Code logo"/>
                </div>
              </div>
            </li>

            
          </ul>

        </div>
        </section>
        <Star/>
    </section>
    </>
    )}
    export default Skills;