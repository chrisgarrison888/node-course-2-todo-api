var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        required: true,
        type: String,
        trim: true
    }
});

module.exports = {User};