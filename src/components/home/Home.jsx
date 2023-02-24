import React from 'react'
import './home.css'
import Header from '../common/heading/Header'
import Title from '../common/title/Title'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    
    <>
    <Header/>
      <section className='hero'>
      
        <div className='container'>
          <div className='row'>
            <Title subtitle='Welcome to Defensive Security' title='Best Online Education'/>
            <p>elmafrod a7ot klam kber hna bs lsa msh 3arfah</p>
            <div className='button'>
              <button className='primary-btn' onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href='https://www.docker.com/products/docker-desktop/';
                                                              }}>  Download Docker <i className='fa fa-light fa-download'></i>
             
              </button>
              <button>
                <Link to="/lab-guide">Labs Guide <i className='fa fa-long-arrow-alt-right'></i></Link>
                
              </button>
             
            </div>
           
          </div>
          <div className='homeimg'>
          <img src="./images/home-img.png" alt=''/>
          </div>
         
        </div>
      </section>
      <div className='margin'></div>

    </>
  )
}

export default Hero

