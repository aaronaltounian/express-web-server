const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

const state = require('./state');
let users = state.users;
let products = state.products;

let newUser = {
    'name': 'Bender Rodriguez',
}

app.get('/users', (req, res) => {
    res.json(state.users);
})

app.get('/users/:user', (req, res) => {
    let id = req.params.user;
    let user = users.find( u => u['id'] === Number(id) );
    res.json(user)
})

app.post('/users', (req, res) => {
    
})

app.listen( port, () => console.log(`Example app listening on port ${port}!`) )
