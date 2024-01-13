import React from 'react'
import { foodTypes } from '../../data/data';
import { Link } from 'react-router-dom';
import pics from '../../assests/pic3.jpg'


import classes from './Foods.module.css'
const Foods = () => {
  return (
  <section id="foods" className={classes.container}>
    <img src={pics} alt="" className={classes.pics}/>
    <div className={classes.overlay}>
    <div className={classes.wrapper}>
      <h4 className={classes.subtitle}>what we offer</h4>
      <h2 className={classes.title}>Best meals in the city</h2>
    
      <div className={classes.foods}>
        {foodTypes.map((foodType)=>(
   
   <Link to={`/foods/${foodType.name}`} key={foodType.id} className={classes.food}>
   <h4>{foodType.name}</h4>
   <div className={classes.imgContainer}>
     <img src={foodType.img}/>
   </div>
 </Link>
        ))}
      </div>


    </div>

</div>

  </section>
  )
}

export default Foods