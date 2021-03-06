import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

//DO NOT USE IMAGEN IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Service Template for Video Streaming and Gaming',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/16955815-Service-Template-for-Video-Streaming-and-Gaming'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Game streaming templates',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/16811926-Game-streaming-templates'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17341626-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17661056-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17557575-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        { 
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
            <div className="portfolio__item_cta">
              <a href={github} className='btn' target='_blank' >Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
          </article>)
          })
      
        }

      </div>
    </section>
  )
}

export default Portfolio