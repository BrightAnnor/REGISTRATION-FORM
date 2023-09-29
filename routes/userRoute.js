const express = require('express');
const {welcome,home,signIn,signUp,signUpUser,signInUser}= require('../controllers/userController')
const authenticate = require('../middleware/authenticateUser')
//server extension
const app = express.Router();

app.get('/',welcome)
app.get('/home',authenticate,home);
app.get('/signUp',signUp);
app.post('/signUp',signUpUser);
app.get('/signIn',signIn);
app.post('/signIn',signInUser)



module.exports = app