const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const ejs = require('ejs');
const  expressLayouts = require('express-ejs-layouts');


//configure
dotenv.config();
//database
const dbConnect = require('./database/dbConnect')

// server port
const port = process.env.port;

//creating server
const app = express();

//setting view
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.static('public'))

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