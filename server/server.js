const express = require('express');
const port = 8081;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"../client/public")));


app.get('/product/:id', (req,res) => {
    var queryStr = `select * from products where productName like '%${req.params.id}%' limit 10`;

    db.query(queryStr, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.listen( port, () => {
    console.log(`the cats are listening on port ${port}...`)
});
