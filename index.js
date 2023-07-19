//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyparser from "body-parser"
import path from "path";
const __dirname=path.resolve();
const app =express();

const r_password="ILoveProgramming";

var authenticate=false;

app.use(bodyparser.urlencoded({extended:true}));

function authentication(req,res,next){
  const password=req.body.password;
  if(password===r_password){
    authenticate=true;
      }
  next();
}

app.use(authentication);

app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/public/index.html");
})

app.post("/check",(req,res)=>{
  if(authenticate){
    res.sendFile(__dirname + "/public/secret.html")
  }
  else{
    res.sendFile(__dirname+ "/public/index.html")
  }
})

app.listen(3000,()=>{
  console.log("Server started at port 3000");
})
