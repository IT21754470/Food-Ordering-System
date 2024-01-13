import React from 'react'
import classes from './Siignup.module.css'
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import img from '../../assests/img5.jpg'
import img2 from '../../assests/img2.jpg'
import { register} from '../../redux/authSlice'; 
import {useDispatch} from 'react-redux'
const Signup = () => {


  const [username,setUsername]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState(false);
  const[error,setError] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async(e) => {
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:5000/auth/register`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({username,email, password})
      })

      const data = await res.json()
      console.log(data)
      dispatch(register(data)) // {userInfo, token}
      navigate("/")
      
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
}

  
  return (
    <div className={classes.signupContainer}>
    <img src={img2} alt="" className={classes.img2}/>
    <div className={classes.overlay}>
    <div className={classes.signupWrapper}>
      <div className={classes.signupLeftSide}>

        <img src={img} className={classes.leftImg}/>
      </div>

      <div className={classes.signupRightSide}>
    
        <h2 className={classes.title}>SignUp</h2>
        
        <form onSubmit={handleSignup} className={classes.signUpForm}>
        <label for="username"><b>Usename</b></label>
          <input type="text" placeholder='type username' onChange={(e)=>
    setUsername(e.target.value)}/>
        <label for="email"><b>Email</b></label>
          <input type="email" placeholder='type email' onChange={(e)=>
    setEmail(e.target.value)}/>
    <label for ="password"><b>Password</b></label>
    <input type="password" placeholder='type password' onChange={(e)=>
   setPassword(e.target.value)}/>
   
  <button className={classes.submitBtn}>SignUp</button>
  <p>Don't have an account?<Link to="/login">Login</Link></p>
        </form>
{
  error && <div className={classes.errorMessage}>
    wrong credintials try different ones

      </div>
}
    </div>
</div>
</div>
  </div>
  )
}

export default Signup