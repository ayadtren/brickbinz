/*This file is to establish a connection between node.js and mysql database that is locally hosted for now. */

import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password", 
    database:"brickbindb"
})

app.use(express.json())
app.use(cors())


app.get("/",(req, res)=>{
    res.json("backend")
})

app.get("/products",(req, res)=>{
    const q = "SELECT * FROM product"
    db.query(q, (err, data)=>{
        if(err) 
        return res.json(err)
        return res.json(data)
  
    })
})






app.listen(8000, () =>
{
    console.log("Connect to backenddd") 
})
