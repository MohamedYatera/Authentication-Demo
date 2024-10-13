//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var pass = "";
var passCheck = "ILoveProgramming";
var valid = false;


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

function secretValidation(req, res, next) {
    pass = req.body["password"];
    if (pass == passCheck) {
        valid = true;
    }
    next();
  }
  
app.use(secretValidation);
  

app.post("/check", (req, res) => {
    if (valid == true){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
    
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});