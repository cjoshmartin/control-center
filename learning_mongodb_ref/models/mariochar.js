const mongodb = require('mongodb');
const Schema = mongoose.Schema;

// creat a Schema and Model

const MarioCharSchema = new Schema({
  name:String,
  weight:Number
});
const MarioChar = mongoose.model('mariochar', MarioCharSchema); // mariochar is the collection name

module.exports =MarioChar;
