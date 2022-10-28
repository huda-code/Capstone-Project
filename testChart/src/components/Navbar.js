import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <header className='navbar'>

        <Link to="/" id="logo" className='navbar_title '><b>Studify</b></Link>
        <div>
          <Link to="#"> About Us </Link>
          <Link to="#"> Contact Us </Link>
          <Link to="/Login"> HOME </Link>
        </div>
      </header>
    </>

  )
}

export default Navbar