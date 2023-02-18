import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'


const Hero = () => {
  return (
    
    <>
    
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
                Labs Guide <i className='fa fa-long-arrow-alt-right'></i>
              </button>
             
            </div>
           
          </div>
          <div className='homeimg'>
          <img src="/GDPR-pana.png" alt=''/>
          </div>
         
        </div>
      </section>
      <div className='margin'></div>

    </>
  )
}

export default Hero