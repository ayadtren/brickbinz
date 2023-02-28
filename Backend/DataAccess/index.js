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


app.get("/", (req, res) => {
    res.json("This is the backend screen. Welcome")
})

app.get("/products",(req, res) => {
    const q = "SELECT * FROM product"
    db.query(q, (err, data) => {
        if(err) 
            return res.json(err)
        return res.json(data)
  
    })
})

app.get("/themes",(req, res)=>{
    const q = "SELECT * FROM theme"
    db.query(q, (err, data)=> {
        if(err) 
            return res.json(err)
        return res.json(data)
  
    })
})

app.get("/cart", (req, res) => {
    const q = "SELECT * from cart"
    db.query(q, (err, data) => {
        if(err)
            return res.json(err)
        return res.json(data)

    })
})

app.post("/cart", (req, res) => {
    const q = "INSERT INTO cart (`cart_set_numb`, `cart_set_name`, `cart_set_price`, `cart_set_location`, `cart_set_quantity`, `cart_set_img`, `cart_theme`) VALUES (?)"
    const values = [
        req.body.product_set_numb,
        req.body.product_set_name,
        req.body.product_price,
        req.body.product_location,
        req.body.product_quantity,
        req.body.product_img,
        req.body.theme,
    ];

    db.query(q, [values], (err, data) => {
        if(err)
            return res.json(err)
        return res.json(data)

    })
})





app.listen(8000, () =>
{
    console.log("Connect to backenddd") 
})
