import express from "express";
import mysql from "mysql";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password", 
    database:"test"
})

app.use(express.json())


app.get("/",(req, res)=>{
    res.json("backend")
})







app.listen(8000, () =>
{
    console.log("Connect to backenddd") 
})