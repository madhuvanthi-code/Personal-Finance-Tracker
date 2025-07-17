const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User');
exports.register=async(req,res)=>{
    const {email, password}=req.body;
    const hashed=await bcrypt.hash(password, 10);
    const user=await User.create({email, password:hashed});
    res.status(201).json({message:'User registered'});
};
exports.login=async(req,res)=>{
    const{email, password}=req.body;
    const user=await User.findOne({email});
    if(!user||!(await bcrypt.compare(password, user.password))){
        return res.status(401).json({error:'Invalid credentials'});
    }
    const token=jwt.sign({userId:user._id}, process.env.JWT_SECRET);
    res.json({token});
};