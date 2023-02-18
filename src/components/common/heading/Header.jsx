import Head from './Head'
import "./header.css"

import { Link } from 'react-router-dom'


const Header = () => {
  
  return (
    <>
   
    <Head />
    <header>
        <nav className='flexSB'>
            <ul className='flexSB'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/modules">Modules</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
               
            </ul>
            <div className='start'>
               <div className='button'>Profile</div>
            </div>
        </nav>
     </header>
  </>
  )
}

export default Header