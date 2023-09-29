const session = require('express-session')

const isUserAuthenticated = (req,res,next)=>{
    
    if(req.session.user){
        return next()
    }  
    res.render('pages/signup')
    
}

module.exports = isUserAuthenticated