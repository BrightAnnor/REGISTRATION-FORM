const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const ejs = require('ejs');
const  expressLayouts = require('express-ejs-layouts');


//configure
dotenv.config();
//database
const dbConnect = require('./database/dbConnect');
const User = require('./database/models/user');
const expressSession =require('express-session');
const session =require('express-session');

// server port
const port = process.env.port;
//api credentials
const API_SECRET = process.env.API_SECRET

//creating server
const app = express();

//middleware for sessions
app.use(session({
    secret: API_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }))

//setting view
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.static('public'));

app.use(express.urlencoded({extended:false}))

app.use('/',userRoute)



//app listening to port&database
const startServer = ()=>{
    try {
        app.listen(port,()=>{
            console.log(`server runing on http://localhost:${port}`)
            dbConnect.authenticate();
        })
        
    } catch (e) {
        console.log(e)
        
    }
}
startServer();