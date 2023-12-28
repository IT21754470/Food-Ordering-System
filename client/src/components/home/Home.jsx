import React from 'react'
import classes from './Home.module.css'
import Hero from '../hero/Hero'
import illustration1 from '../../assests/delivery1.png'
import illustration2 from '../../assests/delivery2.png'
import illustration3 from '../../assests/delivery3.jpg'
//import classes from './Home.module.css'


const Home = () => {
  return (

    <div className={classes.container}>
    <div className={classes.wrapper}>

   
      <Hero/>
      <div className={classes.delivery}>
        <div className={classes.titles}>

          <span className={classes.deliverySubtitle}>Delivery</span>
          <h2 className={classes.deliveryTitle}>Always on time for you</h2>
        </div>

        <div className={classes.deliveryInfos}>
        <div className={classes.deliveryInfo}>
          <img src={illustration1} alt=""className={classes.firstImg}/>
          <h3>Our delivery guy is always on time</h3>
        </div>
        <div className={classes.deliveryInfo}>
          <img src={illustration2} alt=""className={classes.secondImg}/>
          <h3>We works very hard</h3>

         </div>
         <div className={classes.deliveryInfo}>
         <img src={illustration3} alt=""className={classes.thirdImg}/>
         <h3>He is Friendly and social</h3>
         </div>
     </div>
   </div>
 </div>
</div>
  )
}

export default Home