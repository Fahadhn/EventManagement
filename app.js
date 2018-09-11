// NPM MODULES
var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose")

// LOCAL FILES
var config      = require("./config");
var seeds       = require("./seeds");
var event       = require("./models/event");
var organizer   = require("./models/organizer");
// ROUTES
var indexRoutes     = require("./routes/index");
var eventRoutes     = require("./routes/events");
var organizerRoutes = require("./routes/organizers");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

mongoose.connect(config.getDbConnectionString());

app.use("/", indexRoutes);
app.use("/events", eventRoutes);
app.use("/organizers", organizerRoutes);

//seeds();

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("app listening on port "+ port);
});

