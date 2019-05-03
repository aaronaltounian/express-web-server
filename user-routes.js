const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const state = require('./state');
let users = state.users;
let router = express.Router();

const { list, show, post, update, remove } = require('./Controllers/user-controllers')
// let jsonParser = bodyParser.json();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/users', list);
router.get('/users/:userId', show);
router.post('/users', post);
router.put('/users/:userId', update);
router.delete('/users/:userId', remove);

// // get all users:
// app.get('/users', (req, res) => {
//     res.json(state.users);
// })

// // get specific user by ID:
// app.get('/users/:userId', (req, res) => {
//     // store the path after users/ in a variable for comparison:
//     let id = req.params.userId;
//     // find the user whose ID matches the path:
//     let user = users.find( u => u['id'] === Number(id) );
//     // send the user back to the client:
//     res.json(user)
// })

// // post a new user using body-parser to get data from the client:
// app.post('/users', (req, res, next) => {
//     // create a variable newUser from the parsed JSON in the body:
//     let newUser = req.body;
//     // create an id for the new user based on the existing ids:
//     newUser.id = users[users.length - 1].id + 1;
//     // push the newUser into the users array:
//     users.push(newUser);
//     // send the newUser to the client:
//     res.json(newUser);
// })

// // update a user, using body-parser to get data from the client:
// app.put('/users/:userId', (req, res) => {
//     // create updated variable to store the parsed JSON from the body:
//     let updated = req.body;
//     // create id variable to store the path:
//     let id = req.params.userId;
//     // find the user whose ID matches the path:
//     let user = users.find( u => u['id'] === Number(id) );
//     // set the user's occupation to the updated occupation:
//     user.occupation = updated.occupation;
//     // send the updated user's info back to the client:
//     res.json(user);
// })

// // delete a user:
// app.delete('/users/:userId', (req, res) => {
//     // create id variable to store the path:
//     let id = Number(req.params.userId);
//     // find the user whose ID matches the path:
//     let user = users.find( u => u['id'] === id );
//     // instead of deleting user, set inactive:
//     user.isActive = false;
//     // send a message back to the client about which user has been deleted:
//     res.send( `Deleted user #${id}: ${user.name} \n ${JSON.stringify(user)}` );
// })

module.exports = router;