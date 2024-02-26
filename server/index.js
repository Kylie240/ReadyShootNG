const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use('./user', productsRoute);


var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Connected")
    }
});

app.get('/products', (req,res) => {
    const query = "select * from products";

    connection.query(query, (err,results) => {
        if(err){
            return res.status(400).json({messege: "no products found"});
        }
        else{
            res.json(results);
        }
    });
});

module.exports = app;
