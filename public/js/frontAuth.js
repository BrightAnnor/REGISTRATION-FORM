const fullName = document.getElementById('fullName');
const submit = document.getElementById('submit');

submit.addEventListener('click',(req,res)=>{
    const data = fullName.value
    // res.send(data)
    console.log(data)
});