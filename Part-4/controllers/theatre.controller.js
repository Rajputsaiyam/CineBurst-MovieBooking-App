const TheatreService = require('../services/theatre.service');
const { createTheatresValidationSchema, createTheatreHallSchema, createTheatreHallMovieMappingSchema} = require('../lib/validators/theatres.validators');


async function getAllTheatres(req,res){
    const theatres = await TheatreService.getAll();
    return res.json({data: theatres});
}

async function createTheatre(req,res){
    console.log("create theatre");
    console.log(req.body);
    const validationResult = await createTheatresValidationSchema.safeParseAsync(req.body);

    if(validationResult.error) {
        return res.status(400).json({error: validationResult.error});
    }

    console.log(validationResult.data);
    //const {name, plot, street, city, state, country, pincode, lat, lon} = validationResult.data;

    //const theatre = await TheatreService.create({name, plot, street, city, state, country, pincode, lat, lon});

    const theatre = await TheatreService.create(validationResult.data);

    return res.status(201).json({status:'success',data:theatre})

}

async function getTheatreById(req,res){
    const theatreId = req.params.id;
    const theatre = await TheatreService.getTheatreById(theatreId);
    if(!theatre){
        return res.status(404).json({status:'error', error: `Theatre with id ${theatreId} not found`});
    }
    return res.json({status:'success', data: theatre});
}

// Controller for halls
async function getTheatreHallsByTheatreId(req, res) {
    const theatreId = req.params.theatreId
    const halls = await TheatreService.getHallsByTheatreId(theatreId)
    return res.json({ status: 'success', data: halls })
  }
  
  async function createTheatreHall(req, res) {
    const validationResult = await createTheatreHallSchema.safeParseAsync(
      req.body
    )
  
    if (validationResult.error)
      return res.status(400).json({ error: validationResult.error })
  
    const hall = await TheatreService.createTheatreHall(validationResult.data)
  
    return res.json({ status: 'success', data: hall })
  }
  
  async function createShow(req, res) {
    const validationResult =
      await createTheatreHallMovieMappingSchema.safeParseAsync(req.body)
  
    if (validationResult.error)
      return res.status(400).json({ error: validationResult.error })
  
    const { endTimestamp, movieId, price, startTimestamp, theatreHallId } =
      validationResult.data
  
    const hall = await TheatreService.createShow({
      endTimestamp,
      movieId,
      price,
      startTimestamp,
      theatreHallId,
    })
  
    return res.status(201).json({ status: 'success', data: hall })
  }
  
  async function listShowsByMovieId(req, res) {
    const movieId = req.params.movieId
    const shows = await TheatreService.getShowsByMovieId(movieId)
    return res.status(200).json({ data: shows })
  }
  
  module.exports = {
    getAllTheatres,
    createTheatre,
    getTheatreById,
    getTheatreHallsByTheatreId,
    createTheatreHall,
    createShow,
    listShowsByMovieId,
  }