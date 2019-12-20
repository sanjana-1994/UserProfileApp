const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserProfileSchema = new Schema({
    fullname: {type: String, required: true, max: 100},
    designation: {type: String, required: true},
    age : {type: Number, required: true},
    email: {type: String, required: true}
}, {
       timestamps: true
   });


// Export the model
module.exports = mongoose.model('UserProfile', UserProfileSchema);