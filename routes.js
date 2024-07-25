const express = require('express'); 
const router = express.Router(); 
const controller = require("./controllers"); 

router.get("/get-users", controller.getAllUsers);


module.exports = router;