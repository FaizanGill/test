const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://helloworld:nD59uZNHG0uRU8Um@cluster0.dkxhm2r.mongodb.net/";
module.exports = function () {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to db successfully"))
    .catch((err) => console.log(err.message, "Doesn't connected to db"));
};
