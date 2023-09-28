const express = require('express');
const {home,signIn,signUp}= require('../controllers/userController')
//server extension
const app = express.Router();

app.get('/',home);
app.get('/signUp',signUp);
app.get('/signIn',signIn)



module.exports = app