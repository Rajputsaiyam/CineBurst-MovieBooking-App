const {Schema, model} = require('mongoose');

const theatreHallSchema=new Schema({

  number:{
    type:Number,
    required:true,
    min:0
  },
  theatreId :{
    type:Schema.Types.ObjectId,
    //Table name
    ref: 'theatre',
  },
  seatingCapacity :{
    type:Number,
    required:true,
    min:0
  }
},{timestamps:true})

theatreHallSchema.index({number:1, theatreId:1},{unique:true});

const TheatreHall = model('theatreHall',theatreHallSchema);

module.exports = TheatreHall;