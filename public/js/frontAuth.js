const fullName = document.getElementById('fullName');
const submit = document.getElementById('submit');

const refuse = (req,res)=>{
    res.send('enter something')
}

submit.addEventListener('click',(req,res)=>{
  const nameData = fullName.value
  if(nameData.trim < 1){
        refuse()
  }
});