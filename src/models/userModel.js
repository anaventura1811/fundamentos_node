const { ObjectId } = require('bson');
const connection = require('./connection');

const createUser = async (userInfo) => {
  const {
    id,
    cpf,
    statement,
    first_name,
    last_name,
    email,
    password } = userInfo;

  const user = await connection().then((db) =>
    db.collection('users').insertOne({
      profile_id: id,
      full_name: first_name + last_name,
      statement,
      cpf,
      first_name,
      last_name,
      email,
      password
    }));

  return {
    _id: user.insertedId.toString(),
    full_name,
    email
  }
};

module.exports = {
  createUser,
}