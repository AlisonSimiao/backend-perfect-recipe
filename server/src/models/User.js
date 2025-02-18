const mongoose = require('mongoose');

const { schema } = mongoose;

const userSchema = new schema({
  name: {
    type: String,
  },
  nickname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  requirePassChange: {
    type: Boolean,
    default: false,
  },
  suspended: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
  },
}, { timestamp: true });

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
  userSchema,
};
