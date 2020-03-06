const express=require('express');
const spawn = require('child_process').spawn

const router= express.Router();

router.post('/predict',(req,res)=>{
  const {Oldbalance, Newbalance} = req.param.body;

  //Runs the python script using the json entry 
  let process = spawn('python',["./hello.py", 
    Oldbalance, Newbalance]); 
    
    //This runs if there is an error in the python code
    process.stderr.on('data', (err) => { 
        console.log(`an error of ${err} occured`);
    })

    //This is the output from the correct running of the python code
    process.stdout.on('data', (output) => { 
    res.send(output.toString()); 
  }) 
});


module.exports= router