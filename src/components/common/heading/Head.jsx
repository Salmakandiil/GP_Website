import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Head = () => {
  return (
    <>
        <section className='head'>
            <div className='container flexSB'>
              <div className='logo '> 
                 <Link to="/">
                 <h1>Defensive Security </h1>
                 <span>Online Education & Learning</span>
                 </Link>
              </div>
              <div className='button'>
                <button id="hbtn"><Link to="/register">Register <i class="fas fa-angle-double-right"></i></Link></button>
                <button id="hbtn"><Link to="/login"> Login <i class="fas fa-angle-double-right"></i></Link></button>

              </div>

            </div>
            
        </section>
    </>
  )
}

export default Head