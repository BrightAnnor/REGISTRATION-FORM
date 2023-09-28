
const home = (req,res)=>{
    res.render('pages/index')
};
const signUp = (req,res)=>{
    res.render('pages/signup')
};
const signIn = (req,res)=>{
    res.render('pages/signin')
}

module.exports = {
    home,
    signUp,
    signIn
}