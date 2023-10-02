

const User = require("../database/models/user");
const bcrypt = require('bcrypt');

const welcome = (req,res)=>{
    res.render('pages/welcome')
}
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

            const hashPassword = await bcrypt.hash(password,10)
            const result = await User.create({fullName,gender,birthDate,'password':hashPassword,Class})

            // res.send(result)
            if(result) 
            return res.redirect('signIn')}
        else
            
            res.send('kindly try again')
        

           
    } catch (error) {
        // res.send(error)
        res.send('unable to handle request')
        
    }
}
const signIn = (req,res)=>{
    res.render('pages/signin')
};
const signInUser = async(req,res)=>{
   

    try {
        const {fullName,password} = req.body
        const result = await User.findOne({where:{fullName}})
            if(!result) return res.send('Invalid Credentials 1')

            const userCorrectPassword = result.password

            //comapre password
            const isPasswordCorrect = await bcrypt.compare(password,userCorrectPassword);

            if(!isPasswordCorrect) 
            return res.send('Invalid Credentials 2')

            req.session.user = result.id

              const userID = req.session.user
    const userInfo = await User.findOne({where:{id:userID}})
            res.render('pages/index',{userInfo})

            console.log(req.session);

    } catch (error) {
        res.send('Unable to handle request')
        
    }
}

module.exports = {
    welcome,
    home,
    signUp,
    signIn,
    signUpUser,
    signInUser
}