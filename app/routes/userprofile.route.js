module.exports = (app) => {
    const userprofile_controller = require('../controllers/userprofile.controller.js');

    app.get('/test', userprofile_controller.test);

    // Create a new UserProfile
    app.post('/userprofile/create', userprofile_controller.create);

    // Retrieve a single UserProfile with noteId
    app.get('/userprofile/:userId', userprofile_controller.findOne);
}