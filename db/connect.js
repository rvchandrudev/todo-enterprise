const mongoose = require('mongoose');

const connectToDb = async (env) => {
   mongoose.set('strictQuery', false);
   return await mongoose.connect(env.db.MONGO_URI)
}

module.exports = connectToDb;