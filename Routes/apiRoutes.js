const express = require("express");
const router = express.Router();
const register =  require('../app/Controllers/userRegister');

router.post("/register" , register.RegisterUser)

// router.get("/getdata/:id" , register.GetData)
router.get("/getdata" , register.GetData)
// router.get("/getdata" , register.GetData)

router.put("/updatedata" ,register.UpdateData )

router.delete("/deletedata" , register.Deletedata)


module.exports = router ;
