'use strict'
const db = require("../../models");
const express = require("express");

const router = express.Router();

module.exports ={
    RegisterUser , 
    GetData ,
    UpdateData ,
    Deletedata
}

async function RegisterUser(req , res , next){
    try {
        const data = await db.register.create({
            OrgType:  req.body.OrgType, 
            OrgName:  req.body.OrgName ,
            OrgEmail: req.body.OrgEmail ,
            OrgId:    req.body.OrgId ,
            OrgPassword: req.body.OrgPassword ,
        })
        console.log("data entered :" , data)
        res.status(200).json("data sent successfully")
        return next();

 

    } catch (error) {
        console.log("error : " , error)
        return next(error);
    }
} 

async function GetData(req , res,next){
    try {
        const user = await db.register.findAll({
            // where : {OrgId : req.params.id}    //to find the data of a particular id
        })
        console.log("data read : " , user)
        res.status(200).json({user})
        return ne

    } catch (error) {
        console.log("error found" , error)
        return next(error);
        
    }
}
async function UpdateData(req , res , next){
    try {
        const update = await db.register.update({OrgName : "msit" } ,{
            where : {
              id:1
           }
        } ) 
        res.status(200).json({update})
        return next();
        
    }catch (error) {
         console.log("error found" , error)
         return next(error);
    }
}

async function Deletedata(req , res ,next){
    try {
        const dlt = await db.register.destroy({
            where : {
                id:1

            }
        })
       res.status(200).json()
        return next();

    } catch (error) {
        console.log("error found" , error)
        return next(error);
    }
}
