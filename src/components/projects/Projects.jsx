import React from 'react'
import './Projects.css'
import data from './Data'

const Projects = () => {
  return (
    <section className='portfolio section' id='projects'>
      <h2 className="section__title projects">Projects</h2>
      
      <div className='portfolio__container container grid'>
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article className='portfolio__item' key={id}>
              <div className="portfolio__item-image">
                <img src={image}  alt={title} className="portfolio__image"/>
              </div>
          
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='button button__flex portfolio__btn'>
                  Github 
                  <i class="uil uil-github-alt portfolio__icon"></i>
                </a>
                <a href={demo} className='button button__flex portfolio__btn' target="_blank">
                  Live Demo
                  <i class="uil uil-browser portfolio__icon"></i>
              </a>
          </div>
            </article>
          )
        })
        
        }
        
      </div>
    </section>
  )
}

export default Projects