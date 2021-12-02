const { MongoClient } = require('mongodb');

require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const DB_NAME = process.env.DB_NAME;

const SETTINGS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = async () => {
  let db = null;
  if (MONGO_DB_URL) {
    db = await MongoClient.connect(MONGO_DB_URL, SETTINGS).then((conn) => conn.db(DB_NAME));
  }

  if (db) {
    return Promise.resolve(db);
  }

  return Promise.reject(new Error('Something went wrong with database connection'));
}

module.exports = connection;
