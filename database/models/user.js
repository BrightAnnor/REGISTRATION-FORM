const dbConnect = require('../dbConnect');
const{DataTypes,Sequelize} = require('sequelize');


const User = dbConnect.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    birthDate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Class:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});
User.sync({alter:true})

module.exports = User