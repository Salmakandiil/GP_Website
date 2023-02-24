import React from 'react'
import Back from '../common/back/Back'
import Header from '../common/heading/Header'
import'./contact.css'

const Contact = () => {
  return (

    <>
    <Header/>
    <Back title='Contact us'/>

    <section className='contacts padding'>
        <div >
          <div >
          <img className='left-img' src="./images/contact.png" alt=''/>
          </div>
          <div className='right-row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className='items grid2'>
              
              <div className='box'>
                <h4>Email:</h4>
                <p> contact@defensive.com</p>
              </div>
              <div className='box'>
                <h4>Phone:</h4>
                <p> +201000552200</p>
              </div>
            </div>
            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='8'>
                    Write your message here...
              </textarea>
              <button className='primary-btn'>Send Message</button>
            </form>
            </div>
        </div>
      </section>
    
    </>
   
  )
}

export default Contact