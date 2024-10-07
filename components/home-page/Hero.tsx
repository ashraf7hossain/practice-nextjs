"use client"
import Image from 'next/image'
import classes from './Hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/dalle.jpg" alt="next.js" width={300} height={300} />
      </div>
      <h1>Hi, I'm max'</h1>
      <p>
        I blog about web development - expcially frontend framworks like React
      </p>
    </section>
  )
}

export default Hero