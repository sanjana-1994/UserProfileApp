const UserProfile = require('../models/userprofile.model.js');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// Create and Save a new UserProfile
exports.create = (req, res) => {
    // Create a UserProfile
    const user = new UserProfile({
        fullname: req.body.fullname,
        designation:  req.body.designation,
        age: req.body.age,
        email: req.body.email
    });
    // Save UserProfile in the database
    user.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the UserProfile."
        });
    });
};

// Find a single userprofile with a name
exports.findOne = (req, res) => {
    UserProfile.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "UserProfile not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "UserProfile not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Error retrieving userprofile with id " + req.params.userId
        });
    });
};