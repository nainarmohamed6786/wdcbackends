const express=require('express');
const AwardSchema=require('../models/Award');



const router=express.Router();


router.post('/',async(req,res)=>{
    const newAccompany=new AwardSchema(req.body);
    try{
     const savedAccompany=await newAccompany.save();

     res.status(200).json(savedAccompany);
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.get('/',async(req,res)=>{
    try{
        const major=await AwardSchema.find();
       
        res.status(200).json(major)

    }
    catch(err){
        res.status(500).json(err)
    }
})

router.get('/award',async(req,res)=>{
    try{
        const major=await AwardSchema.find().count();
       
        res.status(200).json(major)

    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router;