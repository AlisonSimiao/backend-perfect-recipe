const mongoose = require('mongoose');

const { Schema } = mongoose;
const { userSchema } = require('./User');

const validationCodeSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  secondsDuration: {
    type: Number,
  },
  user: {
    type: [userSchema],
  },
}, { timestamps: true });

const ValidationCode = mongoose.model('ValidationCode', validationCodeSchema);

module.exports = {
  ValidationCode,
};
