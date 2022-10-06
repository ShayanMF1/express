const express = require('express');
const app = express();


app.get('/', (req, res) => res.send("Hello, my name is SF"));
let names = ['SF', 'Rebekah', 'Gareth', 'Ed', 'Dan', 'Dyllan'];

app.get(`/getAll`, (req, res) => {
    res.send(names)

});

app.get("/get/:id", (re, res) => {
    res.send(names[req.params.id]);

});

app.delete("/delete/:id", (req, res) => {
    res.send(names.splice(req.params.id, 1));

});

const bodtParser = require("body-parser");
const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

app.get()

app.post('/create', (req, res) => {
const name = req.body.name;
names.push(name);
res.status(201).send(names[names.lenght -1]);

});

app.listen(4000, () => console.log("Hello, my name is SF"))
