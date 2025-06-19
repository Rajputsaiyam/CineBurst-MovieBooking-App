const {Schema, model} = require('mongoose');

const theatreSchema=new Schema({
  name:{
    type:String,
    required:true,
  },
  plot :{
    type:String,
    required:true,
  },
  street :{
    type:String,
    required:true,
  },
  city :{
    type:String,
    required:true,
  },
  country :{
    type:String,
    required:true,
  },
  pincode :{
    type:Number,
    required:true,
  },
  lat :{
    type:String,
  },
  lon :{
    type:String,
  },
},{timestamps:true})

const Theatre = model('theatre',theatreSchema);

module.exports = Theatre;