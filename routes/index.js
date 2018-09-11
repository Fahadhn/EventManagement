var express = require("express");
var router  = express.Router();
var Event   = require("../models/event");

//show landing 
router.get("/", function(req, res){
  //res.render("landing");
  res.send("success");
});



module.exports = router;
