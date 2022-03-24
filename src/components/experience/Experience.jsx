import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {BsBootstrap} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {FaPhp} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {FaPython} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills That I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'> 
              <AiOutlineHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'> 
              <DiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'> 
              <IoLogoJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'> 
              <BsBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'> 
              <SiTailwindcss className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

        {/*END FRONTEND*/}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'> 
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'> 
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'> 
              <FaPhp className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'> 
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'> 
              <FaPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience