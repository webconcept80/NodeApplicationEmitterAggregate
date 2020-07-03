var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    gender: {
        type: String, required: true
    },
    profile: {
        type: String, required: true
    },
    city: {
        type: String, required: true
    }
});

module.exports = mongoose.model("User", User);