const express = require('express');
const {home,signIn,signUp,signUpUser,signInUser}= require('../controllers/userController')
//server extension
const app = express.Router();

app.get('/',home);
app.get('/signUp',signUp);
app.post('/signUp',signUpUser);
app.get('/signIn',signIn);
app.post('/signIn',signInUser)



module.exports = app