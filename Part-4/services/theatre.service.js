const { createTheatresValidationSchema, createTheatreHallSchema } = require('../lib/validators/theatres.validators');
const Theatre = require('../models/theatre.model');
const TheatreHall = require('../models/theatre-hall.model')
const TheatreHallMovieMapping = require('../models/theatre-hall-movie-mapping')

class TheatreService {

    static async getAll() {
        const theatres = await Theatre.find({});
        return theatres;
    }

    static async create(data) {
        const safeParseData = await createTheatresValidationSchema.safeParseAsync(data);

        if (safeParseData.errors) throw new Error(safeParseData.errors);

        return await Theatre.create(safeParseData.data);
    }

    static async getTheatreById(id) {
        const theatre = await Theatre.findById(id);
        return theatre;
    }

    static getHallsByTheatreId(id) {
        return TheatreHall.find({ theatreId: id })
    }

    static async createTheatreHall(data) {
        const validationResult = await createTheatreHallSchema.parseAsync(data)
        return TheatreHall.create(validationResult)
    }

    static createShow(data) {
        return TheatreHallMovieMapping.create(data)
    }

    static getShowsByMovieId(movieId) {
        return TheatreHallMovieMapping.find({ movieId }).populate({
            path: 'theatreHallId',
            populate: [{ path: 'theatreId' }],
        })
    }

    static getShowsByMovieIdExtended(movieId) {
        return TheatreHallMovieMapping.find({ movieId }).populate({
            path: 'theatreHallId',
            populate: [{ path: 'theatreId' }],
        })
    }

}

module.exports = TheatreService;