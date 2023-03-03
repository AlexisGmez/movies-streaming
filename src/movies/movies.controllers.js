const Movies = require("../models/movies.models");
const uuid = require('uuid');
const MovieGenres = require('../models/movie_genres.models');
const Genres = require("../models/genres.models");
const findAllMovies = async(limit,offset)=>{


    const queryOptions = {
        limit: limit|| 20,
        offset: offset||0
        
    }
    
    // if (limit && offset) {
    //     queryOptions.limit = limit
    //     queryOptions.offset = offset
    // } 
    
    const data = await Movies.findAll(queryOptions)
    return data;
}

const createMovie =async(movieObj)=>{

    const newMovie ={

        id: uuid.v4(),
        title:movieObj.title,
        synopsis: movieObj.synopsis,
        releaseYear: movieObj.director,
        director: movieObj.director,
        duration:movieObj.duration,
        trillerUrl: movieObj.trillerUrl,
        coverUrl: movieObj.coverUrl,
        movieUrl:movieObj.movieUrl,
        clasification: movieObj.clasification,
        rating: movieObj.rating
    }

    const data = await Movies.create(newMovie)
    return data;
}

const addGenreToMovie = async(dataObj)=>{

    const data = await MovieGenres.create({
        id:uuid.v4(),
        movieId: dataObj.movieId,
        genreId:dataObj.genreId
    })
    return data;
}

const findAllMoviesByGenre = async(genreId) =>{
    const data = await Movies.findAll({
        model: Genres,
        where:{
            id:genreId
        }
    });
    return data;

}

module.exports={
    findAllMovies,
    createMovie,
    addGenreToMovie,
    findAllMoviesByGenre
}