const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

//DATABASE Credentials
const DB_NAME = process.env.DATABASE_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASS,{
    host:'localhost',
    dialect:'mysql'
});


module.exports = sequelize