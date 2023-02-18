import React from 'react'
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
/*import { Link } from 'react-router-dom'*/
import Header from '../common/heading/Header'


const CourseHome = () => {
  return (
    <>
    <Header/>
     
   <Back title='Explore Modules' />
   <CoursesCard />
    </>
  )
}

export default CourseHome