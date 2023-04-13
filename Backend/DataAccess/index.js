/*This file is to establish a connection between node.js and mysql database that is locally hosted for now. */

// Importing required packages
import cors from "cors";
import express from "express";
import mysql from "mysql";

const app = express();

// Establishing a connection to the MySQL database
const db = mysql.createConnection({
  host: "localhost", // Host name
  user: "root", // User name
  password: "password", // Password for the user
  database: "brickbindb", // Name of the database
});

app.use(express.json()); // Enabling parsing of JSON data
app.use(cors()); // Enabling CORS for cross-origin requests

// Setting up a GET request for the root URL
app.get("/", (req, res) => {
  res.json("This is the backend screen. Welcome"); // Sending a JSON response to the client
});

// Setting up a GET request for the products
app.get("/products", (req, res) => {
  const q = "SELECT * FROM product";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Setting up a GET request for the themes
app.get("/themes", (req, res) => {
  const q = "SELECT * FROM theme";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Setting up a GET request for the cart
app.get("/cart", (req, res) => {
  const q = "SELECT * from cart";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Setting up a GET request for the login
app.get("/login", (req, res) => {
  const q = "SELECT * from login";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Setting up a GET request for the ticket
app.get("/ticket", (req, res) => {
  const q = "SELECT * from ticket";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
});

app.get("/orders", (req, res) => {
  const q = "SELECT * FROM orders";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.get("/products/:product_set_numb", (req, res) => {
  const productId = req.params.product_set_numb;
  const q = "SELECT * FROM product WHERE product_set_numb = ?";

  db.query(q, [productId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Setting up a GET request for the event
app.get("/event", (req, res) => {
  const q = "SELECT * from event";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Setting up a GET request for the event
app.get("/event", (req, res) => {
  const q = "SELECT * from event";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/orders", (req, res) => {
  const q =
    "INSERT INTO orders (`order_user_name`, `order_total`) VALUES (?)";
  const values = [
    req.body.setName,
    req.body.setTotal
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/ticket", (req, res) => {
  const q =
    "INSERT INTO ticket (`ticket_id`, `ticket_email`, `ticket_username`, `ticket_message`) VALUES (?)";
  const values = [
    req.body.ticket_id,
    req.body.ticket_email,
    req.body.ticket_username,
    req.body.ticket_message
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Setting up a Post request for the products
app.post("/products", (req, res) => {
  const q =
    "INSERT INTO product (`product_set_numb`, `product_set_name`, `product_price`, `product_location`, `product_quantity`, `product_img`, `theme`) VALUES (?)";
  const values = [
    req.body.setNumber,
    req.body.setName,
    req.body.setPrice,
    req.body.setLocation,
    req.body.setQuantity,
    req.body.setImage,
    req.body.setTheme,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Setting up a POST request for the login
app.post("/login", (req, res) => {
  const username = req.body.username; // Retrieving the username from the request body
  const admin_password = req.body.admin_password; // Retrieving the password from the request body
  db.query(
    "SELECT * FROM login WHERE username = ? AND admin_password = ?",
    [username, admin_password],
    (err, result) => {
      if (err) {
        req.setEncoding({ err: err }); // Sending an error message if an error occurs during the execution of the query
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "WRONG USERNAME OR PASSWORD!" });
        }
      }
    }
  );
});

//Code block to post requests to data onto the carts
app.post("/cart", (req, res) => {
  const q =
    "INSERT INTO cart (`cart_set_numb`, `cart_set_name`, `cart_set_price`, `cart_set_location`, `cart_set_quantity`, `cart_set_img`, `cart_theme`) VALUES (?)";
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
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/event", (req, res) => {
  const q =
    "INSERT INTO event (`event_id`, `event_user_name`, `event_email`, `event_date`, `event_time`, `event_number_guest`, `event_description`) VALUES (?)";
  const values = [
    req.body.event_id,
    req.body.event_user_name,
    req.body.event_email,
    req.body.event_date,
    req.body.event_time,
    req.body.event_number_guest,
    req.body.event_description,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/event", (req, res) => {
  const q =
    "INSERT INTO event (`event_id`, `event_user_name`, `event_email`, `event_date`, `event_time`, `event_number_guest`, `event_description`) VALUES (?)";
  const values = [
    req.body.event_id,
    req.body.event_user_name,
    req.body.event_email,
    req.body.event_date,
    req.body.event_time,
    req.body.event_number_guest,
    req.body.event_description,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


//Code block to put requests to cart
app.put("/cart/:cart_set_numb", (req, res) => {
  const cartId = req.params.cart_set_numb;
  const q = "UPDATE cart SET `cart_set_name` = ?, `cart_set_price` = ?, `cart_set_location` = ?, `cart_set_quantity` = ?, `cart_set_img` = ?, `cart_theme` = ? WHERE `cart_set_numb` = ?";
  const values = [
    req.body.cart_set_name,
    req.body.cart_set_price,
    req.body.cart_set_location,
    req.body.cart_set_quantity,
    req.body.cart_set_img,
    req.body.cart_theme,
  ];

  console.log(req.body)
  db.query(q, [...values, cartId], (err, data) => {

    if (err) return res.json(err);
    return res.json(data);
  });
});

//Code block to update a product in the product table.
app.put("/products/:product_set_numb", (req, res) => {
  const productId = req.params.product_set_numb;
  const q =
    "UPDATE product SET `product_set_name` = ?, `product_price` = ?, `product_location` = ?, `product_quantity` = ?, `product_img` = ?, `theme` = ? WHERE `product_set_numb` = ?";

  const values = [
    req.body.setName,
    req.body.setPrice,
    req.body.setLocation,
    req.body.setQuantity,
    req.body.setImage,
    req.body.setTheme,
  ];

  db.query(q, [...values, productId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Updated Successfully");
  });
});

//Code block to delete data in the database using the product's set number
app.delete("/products/:product_set_numb", (req, res) => {
  const productId = req.params.product_set_numb;
  const q = "DELETE FROM product WHERE product_set_numb = ?";

  db.query(q, [productId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Code block to delete an item in the cart table within the database using the product's set number
app.delete("/cart/:cart_set_numb", (req, res) => {
  const cartProductId = req.params.cart_set_numb;
  const q = "DELETE FROM cart WHERE cart_set_numb = ?";

  db.query(q, [cartProductId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/ticket/:ticket_id", (req,res) => {
  const ticketId = req.params.ticket_id;
  const q = "DELETE FROM ticket WHERE ticket_id = ?";

  db.query(q, [ticketId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8000, () => {
  console.log("Connect to backenddd");
});
