import React from 'react'
import classes from './newsletter.module.css'
import { AiOutlineSend } from 'react-icons/ai';

import pics2 from '../../assests/back2.jpeg'
const Newsletter = () => {
  return (
    <section id='contacts' className={classes.container}>
      <img src={pics2} alt="" className={classes.pics2}/>
      <div className={classes.overlay}>
      <div className={classes.wrapper}>
      <div className={classes.wrap}>
        <h4 className={classes.subtitle}>Get our latest offers</h4>
        <h2 className={classes.title}>Newsletter</h2>

        <div className={classes.inputContainer}>

          <input type="text" placeholder="  Enter Email.... "></input>

          
          <hr/>
          <AiOutlineSend className={classes.sendIcon}/>
          </div>
        </div>
       
      </div>

    

</div>
    </section>
   
  )
}

export default Newsletter