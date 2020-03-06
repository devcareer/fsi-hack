const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: {
    type: Number,
  },
  old_balance: {
    type: String,
  },
  new_balance: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  timestamps: true,
});

module.exports = mongoose.model('transactions', transactionSchema);
