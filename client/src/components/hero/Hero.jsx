import React from 'react'
import classes from './Hero.module.css'
import { AiOutlineArrowDown } from 'react-icons/ai';
import manEating from '../../assests/cafe2.jpg'
const Hero = () => {
  return (
  

    <section id="home" className={classes.container}>
     
      <img src={manEating} alt="" className={classes.manEating}/>
      <div className={classes.overlay}>
      <div className={classes.left}>
    
</div>
        <div className={classes.wrapper}>
       
    <div className={classes.left}>
    <div className={classes.content}>
      <h2 className={classes.title}>EXPLORE<br/> OUR MENU</h2>
    
    
      <p className={classes.desc}>
        The interior was homely with comfy sofa cushion were as soft as clouds.
       Different types of sitting agreements were used to cater for every type of customers.
       A Rich display of scrumptious pastries was enough to make one feel hungrier.
        Food presentation as nothing less than a piece of art

      </p>
    
      <div className={classes.buttons}>
        <button className={classes.buttonOrder}>order now</button>
        <button className={classes.buttonSee}><a href='#foods'>see what's available<AiOutlineArrowDown/></a></button>
</div>
</div>
</div>
    <div className={classes.right}>
      


    </div>

    </div>
  

</div>
    </section>
  )
}

export default Hero