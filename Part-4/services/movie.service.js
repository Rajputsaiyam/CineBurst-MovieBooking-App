const { createMovieValidationSchema } = require('../lib/validators/movie.validators');
const Movie = require('../models/movie.model');

class MovieService{

    static async getAll(){
        const movies = await Movie.find({});
        return movies;
    }

    static async create(data){
        const safeParseData = await createMovieValidationSchema.safeParseAsync(data);

        if(safeParseData.errors) throw new Error(safeParseData.errors);

        return await Movie.create(safeParseData.data);
    }

    static async getMovieById(id){
        const movie = await Movie.findById(id);
        return movie;
    }
}

module.exports=MovieService;