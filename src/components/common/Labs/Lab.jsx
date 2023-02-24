import React from 'react'
import './lab.css'
import { Link } from 'react-router-dom'


const Lab = () => {
  return (
    <>
    <section className='lab'>
    <div className='flexSB'>

        <img className='lab-icon' src="./images/icons/lab-icon.png" alt='' />
        <h3>Lab Time</h3>

    </div>
    
    <div className='template'>
    
      <p>
        It's time to make sure that you understood the module well, So there's the link of the module lab, <br />
        Download it & Enjoy Learning..
      </p>
      <button className='primary-btn' onClick={(e) => {  e.preventDefault();
       window.location.href='https://www.google.com.eg/?hl=ar';  }}>  Download  <i className='fa fa-light fa-download'></i>
             
      </button>
      <p className='alert'>
        If it's your first time, you can check Lab Guide from <Link to="/lab-guide"><label className='guide-label'>HERE</label></Link> to know how it works.
      </p>
      <p className='upload'>
        And now submit us your solution to check whether you did it or you have to try again.<br />
         
       <label>Upload your link here, please.</label><br />
        <input type="text" name="lab_link" />
        <button className='submit-btn' >  Submit  <i className='fa fa-light fa-upload'></i>
             
      </button>
      </p>

    </div>
    
    
    </section>
    </>
  )
}

export default Lab