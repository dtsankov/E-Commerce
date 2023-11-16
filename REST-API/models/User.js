const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    email: {required: true,type: String,},
    password: { required: true,type: String,minlength: [5, 'Password should have at least 5 characters!'],maxlength: [20, 'Password cannot have more than 20 characters!'],
    },
    role: {required: false,type: String,enum: ['admin','user'],default: 'user'},
})
userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then((hash) => {
            this.password = hash
            return next()
        })
})
const User = new mongoose.model('User', userSchema);
module.exports = User;