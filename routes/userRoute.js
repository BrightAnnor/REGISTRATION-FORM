const express = require('express');
const {home,signIn,signUp,signUpUser,signInUser}= require('../controllers/userController')
const authenticate = require('../middleware/authenticateUser')
//server extension
const app = express.Router();

app.get('/',authenticate,home);
app.get('/signUp',signUp);
app.post('/signUp',signUpUser);
app.get('/signIn',signIn);
app.post('/signIn',signInUser)



module.exports = app