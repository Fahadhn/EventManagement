var express     = require("express");
var router      = express.Router();
var bcrypt      = require("bcrypt");
var jwt         = require("jsonwebtoken");
var Organizer   = require("../models/organizer");

/*---------ADD/REGISTER NEW ORGANIZER-----------*/
//1. extract the password from the request and hash the password using bcrypt
//2. extract other information from the request and store in one object
//3. save the object to database
//4. catch any other error
router.post("/register",  (req,res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {        //this line means when above call finish finish yell out the hash - syntax bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {store hash in database} //for more details please visit https://www.npmjs.com/package/bcrypt 
            const newOrganizer = new Organizer({
                name : req.body.name,
                email : req.body.email,
                mobile1 : req.body.mobile1,
                mobile2 : req.body.mobile2,
                work1 : req.body.work1,
                work2 : req.body.work2,
                logoUrl : req.body.logoUrl,
                password : hash
            });
            newOrganizer.save()
                .then(result => { 
                    res.status(201).json({
                        message: 'Organizer Created',
                        result: result
                    });
                })
                .catch(err => { //any unhandled error goes here
                    res.status(500).json({
                        error: err
                    });
                });

        });
    
});

/*---------ORGANIZER LOGIN-----------*/
//1. find and fetch organizer by email
//2. extract the password from the fetched organizer and verify the password through bcrypt 
//3. create the token and send to client 
router.post("/login", (req,res) => {
    //find and fetch organizer email in database 
    let fetchedOrganizer;
    Organizer.findOne({ email: req.body.email })
        .then(organizer => {
            if(!organizer){
                console.log("no organizer" + organizer);
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            //verify the password
            console.log("organizer email found");
            fetchedOrganizer = organizer; //storing organizer read from database to fetchedOrganizer so we can use it in the second .then block where organizer is no more readable
            return bcrypt.compare(req.body.password, organizer.password); //boolean true/false
        })
            .then(result => {
                if(!result){
                    console.log("wrong password" + result);
                    return res.status(401).json({
                        message: 'Auth failed'
                    })
                }
                console.log("results found");
                //create the token 
                const token = jwt.sign(
                    {email: fetchedOrganizer.email, organizerID: fetchedOrganizer._id},
                    'secret_this_should_be_longer_in_PRD',
                    {expiresIn: '1h'} 
                );
                //send token to client
                res.status(200).json({
                    token: token
                });
                
            })
            //capture any other error
            .catch(err => {
                console.log("general error" + err);
                return res.status(401).json({
                    message: 'Auth failed'
                })
            })
});

module.exports = router;

