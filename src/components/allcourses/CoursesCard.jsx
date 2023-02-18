import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { Link } from 'react-router-dom'

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='modImage'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                <h1>Module {val.id}</h1>
                  <h1>{val.coursesName}</h1>
                 
                </div>
              </div>
             
              <button className='outline-btn'><Link to={val.link}>ENROLL NOW !</Link></button> 
              
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
/*<Link to="/SQL">ENROLL NOW !</Link>*/