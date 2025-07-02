import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='container'>
        <h1 className='heading'>CREATE YOUR DASHBOARD</h1>
        <Link to='/create'>
            <button className='btn btn-primary button'>Create</button>
        </Link>
    </div>
  )
}

export default Home