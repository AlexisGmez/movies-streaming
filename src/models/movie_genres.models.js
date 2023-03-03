const { DataTypes } = require('sequelize');

const db = require('../utils/database');


const Movie_Genres = db.define('movie_genres',{

    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    movieId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Movies,
            key: 'id'
        }
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Genres,
            key: 'id'
        }
    }
})

module.exports = Movie_Genres