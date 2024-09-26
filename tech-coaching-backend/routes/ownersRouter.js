const express = require('express');
const router =express.Router();
const ownerModel = require("../models/owner-model");

if(process.env.Node_ENV === "development"){
    router.post("/create", async function (req, res){
        let owners =await ownerModel.find();
        if (owners.length > 0){
            return res
            .status(502)
            .send("you dont have permission to create a new owner")
        }
        let {fullname, email, password }=req.body;
        // res.send("hy owner working")
        let createdOwner=await ownerModel.create({
            fullname, email, password 
        })
    })
    };

router.get("/", function (req, res){
    res.send("hey it working");
})


module.exports =router