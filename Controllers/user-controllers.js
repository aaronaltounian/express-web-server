const state = require('../state');
const users = state.users;

exports.list = (req, res) => {
    res.json(state.users);
}

// get specific user by ID:
exports.show = (req, res) => {
    // store the path after users/ in a variable for comparison:
    let id = req.params.userId;
    // find the user whose ID matches the path:
    let user = users.find( u => u['id'] === Number(id) );
    // send the user back to the client:
    res.json(user)
}

// post a new user using body-parser to get data from the client:
exports.post = (req, res, next) => {
    // create a variable newUser from the parsed JSON in the body:
    let newUser = req.body;
    // create an id for the new user based on the existing ids:
    newUser.id = users[users.length - 1].id + 1;
    // push the newUser into the users array:
    users.push(newUser);
    // send the newUser to the client:
    res.json(newUser);
}

// update a user, using body-parser to get data from the client:
exports.update = (req, res) => {
    // create updated variable to store the parsed JSON from the body:
    let updated = req.body;
    // create id variable to store the path:
    let id = req.params.userId;
    // find the user whose ID matches the path:
    let user = users.find( u => u['id'] === Number(id) );
    // set the user's occupation to the updated occupation:
    user.occupation = updated.occupation;
    // send the updated user's info back to the client:
    res.json(user);
}

// delete a user:
exports.remove = (req, res) => {
    // create id variable to store the path:
    let id = Number(req.params.userId);
    // find the user whose ID matches the path:
    let user = users.find( u => u['id'] === id );
    // instead of deleting user, set inactive:
    user.isActive = false;
    // send a message back to the client about which user has been deleted:
    res.send( `Deleted user #${id}: ${user.name} \n ${JSON.stringify(user)}` );
}
