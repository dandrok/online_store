import React from 'react'
import classes from './Navbar.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import SomeData from '../data/SomeData'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <p>
          <a href='/'>Logo /.</a>
        </p>
      </div>
      <div className={classes.menu}>
        {SomeData.map((link) => {
          const { id, url, title } = link
          return (
            <a key={id} href={url}>
              {title}
            </a>
          )
        })}
      </div>
      <div>
        <a href='/basket'>
          <FaShoppingCart className={classes.icon} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
