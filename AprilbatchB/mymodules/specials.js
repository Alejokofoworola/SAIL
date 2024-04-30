const express = require('express');
const execute = require('./route');
const server = express();
const port =3030;

const users ={
    name: "olamide",
    Age: 10,
    class: "batch B",
};

server.use(express.json());
const userList= [];

server.get('/home', (req, res)=>{

});

