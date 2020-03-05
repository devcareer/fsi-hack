const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    account_number: {
        type: String,
    },
    phone_number: {
        type: String,
    },
    bvn: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    }
 }, {
     timestamps: true,
 });

 module.exports = mongoose.model('users', userSchema);