const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema ({
    amount: {
        type: Number,
    },
    old_balance: {
        type: Number,
    },
    new_balance: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model ('transactions', transactionSchema);