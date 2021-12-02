const userModel = require('../models/userModel');

const createUser = async (userInfo) => {

  const user = await userModel.createUser(userInfo);
  return user;
  
};

module.exports = {
  createUser,
}