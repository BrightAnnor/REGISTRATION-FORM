const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute')

//configure
dotenv.config();

// server port
const port = process.env.port;

//creating server
const app = express();

app.use('/',userRoute)



//app listening to port&database
const startServer = ()=>{
    try {
        app.listen(port,()=>{
            console.log(`server runing on http://localhost:${port}`)
        })
        
    } catch (e) {
        console.log(e)
        
    }
}
startServer();