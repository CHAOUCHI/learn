const express = require("express")
const word = "hello";

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("Welcome to App server :) ",word);
})
app.listen(8000,()=>{
    console.log("Server listening on port 3000");
})