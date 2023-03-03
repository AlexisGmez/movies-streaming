const { DataTypes } = require('sequelize');


const db = require('../utils/database');

const Serie_Genres = db.define('serie_Genres',{

    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    seriesId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Series,
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

module.exports = Serie_Genres