import React from 'react';
import classes from './Hero.module.css';
import pen from './KroneApollo-e1571972772455.png';
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__text}>
        <h1>
          Stylish and timeless design <span>more than a writing tool</span>
        </h1>
      </div>
      <div className={classes.hero__img}>
        <img src={pen} alt="pen" />
      </div>
    </section>
  );
};

export default Hero;
