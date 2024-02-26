const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('./products', (req,res) => {
    query = "select * from products"
    connection.query(query)
    if(!err){
        if(results.length <= 0) {

        }
    }
    else{
        return res.status(400).json({messege: "no products found"});
    }
})

module.exports = router;