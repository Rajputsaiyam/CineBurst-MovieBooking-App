const {z} = require('zod');

const createMovieValidationSchema = z.object({
    title:z.string().min(3).max(25),
    description:z.string().min(3),
    language:z.string(),
    duration:z.string(),
    coverImageURL:z.string(),
});


module.exports = {
    createMovieValidationSchema,
};