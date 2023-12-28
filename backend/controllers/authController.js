const authController = require('express').Router();
const user = require('../models/User'); // Change this line to use lowercase 'user'
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
// Authentication, log in
authController.post('/register', async (req, res) => {
    try {
        const isExisting = await user.findOne({ email: req.body.email }); // Change this line to use lowercase 'user'
        if (isExisting) {
            throw new Error("Already such an account with this email. Try a new one!");
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await user.create({ ...req.body, password: hashedPassword }); // Change this line to use lowercase 'user'

        const { password, ...others } = newUser._doc;

        const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET, { expiresIn: '5h' });
        return res.status(201).json({ others, token });
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

//login
 authController.post('/login', async(req,res)=>{
     try{
         const existinguser=await user.findOne({email:req.body.email})

        if(!existinguser){
            throw new Error("user credintials are wrong!")
        }

        const comparePass=await bcrypt.compare(req.body.password,existinguser.password)
        if(!comparePass){
            throw new Error("user credintials are wrong!")
        }

        const {password,...others}=existinguser._doc
        
        const token=jwt.sign({id:existinguser._id,isAdmin:existinguser.isAdmin},process.env.JWT_SECRET,{expiresIn:'5h'})

        return res.status(200).json({others,token})
    }catch(error){
        return res.status(500).json(error.message)
    }


 });


module.exports = authController;
