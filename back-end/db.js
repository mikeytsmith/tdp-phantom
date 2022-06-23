const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect(
  "mongodb://localhost:27017/TDP-DB",
  { useNewUrlParser: true },
  (err) => {
    if (err) return console.error(err);
    return console.log("Connection successful");
  }
);

const artistSchema = new Schema({
  _id: Number, //replace custom id (which is an object containing a string) with own (number) - easier for doing updates/deletes
  name: {
    type: String,
    min: 2,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 65,
    required: true,
  },
  specialism: String,
});

const Artist = mongoose.model("artist", artistSchema);

module.exports = Artist;
