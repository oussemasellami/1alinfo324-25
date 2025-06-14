const express=require('express')
const router=express.Router()

const User=require('../models/user')

/*router.get("/add/:username/:email/:cin",(req,res)=>{

    new User({
        username:req.params.username,
        email:req.params.email,
        cin:req.params.cin

    }).save()
res.send('user added')
})*/

router.post('/add',(req,res)=>{
    try{
    const user =new User(req.body)
    console.log(req.body)
    user.save()
        res.status(200).json(user)
    }catch(err){
        res.status(400).json(err)
    }

})

router.get('/showall',async(req,res)=>{
    try{
    const user =await User.find()
    
        res.status(200).json(user)
    }catch(err){
        res.status(400).json(err)
    }

})

router.get('/show/:id',async(req,res)=>{
    try{
    const user =await User.findById(req.params.id)
    
        res.status(200).json(user)
    }catch(err){
        res.status(400).json(err)
    }

})


module.exports=router