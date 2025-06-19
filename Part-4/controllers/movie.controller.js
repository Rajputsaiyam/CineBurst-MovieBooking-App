const MovieService = require('../services/movie.service');
const { createMovieValidationSchema} = require('../lib/validators/movie.validators');


async function getAllMovies(req,res){
    const movies = await MovieService.getAll();
    return res.json({data: movies});
}

async function createMovie(req,res){
    const validationResult = await createMovieValidationSchema.safeParseAsync(req.body);

    if(validationResult.error) {
        return res.status(400).json({error: validationResult.error});
    }

    const movie = await MovieService.create(validationResult.data);

    return res.status(201).json({status:'success',data:movie})

}

async function getMovieById(req,res){
    const movieId = req.params.id;
    const movie = await MovieService.getMovieById(movieId);
    if(!movie){
        return res.status(404).json({status:'error', error: `Movie with id ${movieId} not found`});
    }
    return res.json({status:'success', data: movie});
}

module.exports={
    getAllMovies,
    createMovie,
    getMovieById
}