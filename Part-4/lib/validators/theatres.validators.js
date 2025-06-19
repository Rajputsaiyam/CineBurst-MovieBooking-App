const {z} = require('zod');

const createTheatresValidationSchema = z.object({
    name:z.string().min(3).max(25),
    plot:z.string().min(3).max(25),
    street:z.string(),
    city:z.string(),
    state:z.string(),
    country:z.string(),
    pincode:z.string(),
    lat:z.string().optional(),
    lon:z.string().optional(),
});

const createTheatreHallSchema = z.object({
    number: z.number().min(0),
    seatingCapacity: z.number().min(0),
    theatreId: z.string(),
})
  
const createTheatreHallMovieMappingSchema = z.object({
    movieId: z.string(),
    theatreHallId: z.string(),
    startTimestamp: z.string().optional(),
    endTimestamp: z.string().optional(),
    price: z.number(),
})


module.exports = {
    createTheatresValidationSchema,
    createTheatreHallSchema,
    createTheatreHallMovieMappingSchema
};