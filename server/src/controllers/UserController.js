const User = require('../models/User');

const createUser = async (req, res) => {
  const { name, nickname, email, password } = req.body;


  console.log(name, nickname, email, password);
};

module.exports = createUser;
