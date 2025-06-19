const {Schema, model} = require('mongoose');

const theatreHallMovieMappingSchema=new Schema({
  movieId:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'movie'
  },
  theatreHallId :{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'theatreHall'
  },
  startTimeStamp :{
    type:Number,
    required:false,
  },
  endTimeStamp :{
    type:Number,
    required:false,
  },
  price :{
    type:Number,
    required:true,
  },
},{timestamps:true})


theatreHallMovieMappingSchema.index(
    {movieId:1, theatreHallId:1, startTimeStamp:1, endTimeStamp:1},
    {unique:true}
);

const TheatreHallMovieMapping = model('theatreHallMovieMapping',theatreHallMovieMappingSchema);

module.exports = TheatreHallMovieMapping;