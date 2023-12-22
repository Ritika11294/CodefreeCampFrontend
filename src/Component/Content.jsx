import React, { useEffect, useState } from 'react'
import './Main.css';
import axios from 'axios';


const Main = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get(`https://freecodecamp-deploy.onrender.com/courses`).then((response) => {
      
      setCourses(response.data)
    })
    .catch(error => console.error('Error fetching courses:', error))
  }, [])
  return (
    <>
    <div className="center-container">
      <div>Welcome to freeCodeCamp.org</div>
    </div>
    <div className="center-quote">
      <p className='quote'>"I have not failed. I've just found 10,000 ways <br /> that won't work. "</p>
      <p className='name'>Thomas A. Edison</p>
    </div>
    <div className='mockdata'>
      {courses.map( course => ( <div key={course.id} className='content'>{course.title} ({course.duration})</div>)
      )}
    </div>
    </>
  )
}

export default Main
