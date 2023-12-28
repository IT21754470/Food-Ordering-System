import React from 'react'
import classes from './Login.module.css'
import img from '../../assests/img5.jpg'
import img2 from '../../assests/img2.jpg'
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { login } from '../../redux/authSlice'; 


const Login =  ()=>{
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[error,setError] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`http://localhost:5000/auth/login`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
      console.log(data);
  
      // Check if the login was successful based on your API response structure
      if (res.ok) {
        dispatch(login(data)); // Dispatch only if the login is successful
        navigate("/");
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  
  return (
  <div className={classes.loginContainer}>
    <img src={img2} alt="" className={classes.img2}/>
    <div className={classes.overlay}>
    <div className={classes.loginWrapper}>
      <div className={classes.loginLeftSide}>

        <img src={img} className={classes.leftImg}/>
      </div>

      <div className={classes.loginRightSide}>
    
        <h2 className={classes.title}>Login</h2>
        
        <form onSubmit={handleLogin} className={classes.loginForm}>
        <label for="email"><b>Email</b></label>
          <input type="email" placeholder='type email' onChange={(e)=>
    setEmail(e.target.value)}/>
    <label for ="password"><b>Password</b></label>
    <input type="password" placeholder='type password' onChange={(e)=>
   setPassword(e.target.value)}/>
  <button className={classes.submitBtn}>Login</button>
  <p>Don't have an account?<Link to="/signup">SignUp</Link></p>
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

export default Login