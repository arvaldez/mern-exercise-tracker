const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        //validation of username
        type: String, 
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    //time when username was created or modified
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;