

const User = require("../database/models/user");


const home = (req,res)=>{
    res.render('pages/index')
};
const signUp = (req,res)=>{
    res.render('pages/signup')
};
const signUpUser = async (req,res)=>{
    try {
        
        const{fullName,gender,birthDate,password,Class,confirm_password} = req.body

        // console.log(req.body);

        if(confirm_password === password){
            
            const result = await User.create({fullName,gender,birthDate,password,Class})

            // res.send(result)
            if(result) 
            return res.send('created successfully')}
        else
            
            res.send('kindly try again')
        

           
    } catch (error) {
        res.send('unable to handle request')
        
    }
}
const signIn = (req,res)=>{
    res.render('pages/signin')
}

module.exports = {
    home,
    signUp,
    signIn,
    signUpUser
}