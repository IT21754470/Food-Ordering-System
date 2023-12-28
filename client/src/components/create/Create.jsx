import React from 'react'
import classes from './Create.module.css'
import {AiOutlineCloseCircle  } from 'react-icons/ai';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Create = () => {

  const[title,setTitle] =useState("")
  const[desc,setDesc] =useState("")
  const[category,setCategory] =useState("")
  const[image,setImage] =useState("")
  const[price,setPrice] =useState("")
  const[review,setReview] =useState("")
  const navigate=useNavigate()

  const {token}=useSelector((state)=>state.auth)

const onChangeFile=(e)=>{
  setImage(e.target.files[0])
      

}
const handleCloseImg=(e)=>{
setImage('')

}
const handleCreateProduct = async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    let filename = null;

    if (image) {
      // Move the filename generation inside the conditional block
      filename = Date.now() + image.name;
      formData.append("filename", filename);
      formData.append("image", image);

      await fetch(`http://localhost:5000/upload/image`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
      });
    }

    // Uploading product
    const res = await fetch(`http://localhost:5000/product`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        title,
        desc,
        category,
        img: filename,
        price,
        review,
      }),
    });

    const food = await res.json();
    navigate(`/food/${food.id}`);
  } catch (error) {
    console.error(error.message);
  }
};


  return(
    <div className={classes.contactContainer}>

      <div className={classes.wrapper}>

        <h2 className={classes.title}>Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title:</label>
            <input type="text" placeholder='title...' 
            className={classes.input} 
            onChange={(e)=>setTitle(e.target.value)}/>


          </div>
         

          <div className={classes.inputWrapper}>
            <label>Description:</label>
            <input type="text" placeholder='Description...' 
            className={classes.input} 
            onChange={(e)=>setDesc(e.target.value)}/>


          </div>
         

          <div className={classes.inputWrapper}>
            <label>Category:</label>
            <input type="text" placeholder='Category...' 
            className={classes.input} 
            onChange={(e)=>setCategory(e.target.value)}/>


          </div>

          <div className={classes.inputWrapperImage}>
            <label htmlFor='image'className={classes.labelFileInput}>Image:<span>Upload here</span></label>
            <input type="file"
            id="image"
            placeholder='Image...'
            className={classes.input} 
            onChange={onChangeFile}
            style={{display:'none'}
            }/>
            {image && <p className={classes.imageName}>
              {image.name} <AiOutlineCloseCircle onClick={handleCloseImg} className={classes.classIcon}/></p>}


          </div>

          <div className={classes.inputWrapper}>
            <label>Price:</label>
            <input type="number" placeholder='Price...' 
            className={classes.input} 
            onChange={(e)=>setPrice(e.target.value)}/>


          </div>
         

          <div className={classes.inputWrapper}>
            <label>Review:</label>
            <input type="number" 
            step={0.1}
            min={1}
            max={5}
            placeholder='Review...' 
            className={classes.input} 
            onChange={(e)=>setReview(e.target.value)}/>


          </div>

          <div className={classes.buttonWrapperWrapper}>
          <button type="submit" className={classes.submitBtn}>
          submit
          </button>


          </div>

        </form>

      </div>
    </div>
  )
  }

export default Create