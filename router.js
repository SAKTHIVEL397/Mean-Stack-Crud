const express = require("express");

const router = express.Router();
const Persons = require('./employee');

//Create

router.post('/abc',async (req,res)=>{
    const postPerson = new Persons({
        name : req.body.name, 
        email : req.body.email,
        address : req.body.address
    });
    const savepersons =await postPerson.save();
    res.json(savepersons);
}); 

//get

router.get('/get',async(req,res) =>{
    const getall=await Persons.find();
    res.json(getall);
    res.send(getall);
});

//Update

router.put('/:id',async(req,res) =>{
    const putone = await Persons.updateOne({_id:req.params.id},{$set:{name:req.body.name,email:req.body.email,address:req.body.address}})
    res.json(putone);
    res.send(putone);
});

//Get By Id

router.get('/:id',async(req,res) =>{
    const findbyid=await Persons.findById(req.params.id);
    res.json(findbyid);
});

//Delete By Id

router.delete('/:id',async(req,res) =>{
    const deletebyId=await Persons.remove({_id:req.params.id});
    res.json(deletebyId);
});
module.exports = router;