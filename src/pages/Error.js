import React from 'react'
import classes from './Error.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Error = () => {
  return (
    <>
      <Navbar />
      <div className={classes.error}>
        <h1 className={classes.four}>404</h1>
        <h2>Page Not Found</h2>
        <p>back to home page</p>
      </div>
      <Footer />
    </>
  )
}

export default Error
