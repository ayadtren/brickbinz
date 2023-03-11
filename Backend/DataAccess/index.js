/*This file is to establish a connection between node.js and mysql database that is locally hosted for now. */

// Importing required packages
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

// Establishing a connection to the MySQL database
const db = mysql.createConnection({
    host:"localhost", // Host name
    user:"root", // User name
    password:"password", // Password for the user
    database:"brickbindb" // Name of the database
    });
    
    app.use(express.json()); // Enabling parsing of JSON data
    app.use(cors()); // Enabling CORS for cross-origin requests
    
    // Setting up a GET request for the root URL
    app.get("/", (req, res) => {
    res.json("This is the backend screen. Welcome"); // Sending a JSON response to the client
    });



// Setting up a GET request for the products
app.get("/products",(req, res) => {
    const q = "SELECT * FROM product"
    db.query(q, (err, data) => {
        if(err) 
            return res.json(err)
        return res.json(data)
  
    })
})

// Setting up a GET request for the themes
app.get("/themes",(req, res)=>{
    const q = "SELECT * FROM theme"
    db.query(q, (err, data)=> {
        if(err) 
            return res.json(err)
        return res.json(data)
  
    })
})
// Setting up a GET request for the cart
app.get("/cart", (req, res) => {
    const q = "SELECT * from cart"
    db.query(q, (err, data) => {
        if(err)
            return res.json(err)
        return res.json(data)

    })
})


// Setting up a GET request for the login
app.get("/login", (req, res) => {
    const q = "SELECT * from login"
    db.query(q, (err, data) => {
        if(err)
            return res.json(err)
        return res.json(data)

    })
})


// Setting up a POST request for the login
app.post("/login", (req, res) => {
    const username = req.body.username; // Retrieving the username from the request body
    const admin_password = req.body.admin_password; // Retrieving the password from the request body
    db.query("SELECT * FROM login WHERE username = ? AND admin_password = ?", [username, admin_password],
    (err, result) => {
    if(err){
    req.setEncoding({err: err}); // Sending an error message if an error occurs during the execution of the query
    }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})


//Code block to post requests to data onto the carts 
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

app.delete("/cart/:cart_set_numb", (req, res) => {
    const cartProductId = req.params.cart_set_numb;
    const q = "DELETE FROM cart WHERE cart_set_numb = ?"

    db.query(q, [cartProductId], (err, data) => {
        if(err)
            return res.json(err)
        return res.json(data)
    })
})



app.listen(8000, () =>
{
    console.log("Connect to backenddd") 
})
