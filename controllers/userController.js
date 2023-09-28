
const home = (req,res)=>{
    res.send('welcome page')
};
const signUp = (req,res)=>{
    res.send('signup page')
};
const signIn = (req,res)=>{
    res.send('signIn page')
}

module.exports = {
    home,
    signUp,
    signIn
}