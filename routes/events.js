var express = require("express");
var router  = express.Router();
var Event   = require("../models/event");
var checkAuth   = require("../middleware/check-auth");

//show all events
router.get("/", function(req,res){
    console.log("get all");
    Event.find({},function(err, events){
      if (err) 
        console.log(err);
    //res.render("../views/events/index", {events:events});
    res.send(events);
    }
  )
});

//show specific event
router.get("/:id", function(req,res){
    Event.findById(req.params.id,function(err, event){
        console.log("get with ID " + event.id);
        if (err) 
            console.log(err);
        //render the view page and pass the fetched events form the database
        res.send(event);
    })
});

//add event
router.post("/", checkAuth, function(req,res){
    var newEvent = new Event ({
        name        : req.body.name,
        description : req.body.description,
        date        : req.body.date,
        tickets     : req.body.price,
        imagesUrl   : req.body.image,
        organizer   : req.body.organizer,
        location    : req.body.location,
        category    : req.body.category
    });
    newEvent.save().then(result =>{
        res.status(200).json({
            message: "New event created successfuly",
            result: result
        })
    })
    //Event.create(newEvent,function(err, newEvent){
     //   if(err)
      //      console.log(err);
    res.send("Add new event");
    });
//});


//create event




//delete event

module.exports = router;