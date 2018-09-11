var mongoose        = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

var organizerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile1: String,
    mobile2: String,
    work1: String,
    work2: String,
    logoUrl: String,
    password: {
        type: String, 
        required: true
    }
})

organizerSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Organizer", organizerSchema);


  


