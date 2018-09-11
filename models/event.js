var mongoose = require("mongoose");

var eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    
    date: {
        type: Date, default: Date.now
    },
    
    tickets: 
        { 
            type: String,
            price: Number
        },

    imagesUrl: String,
    organizer: String,
    location: String,
    hidden: Boolean,
    category: [String]
 });
 
 module.exports = mongoose.model("Event", eventSchema);