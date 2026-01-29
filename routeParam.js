const express = require('express');
const app = express();

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Neha" }
];

//home route
app.get('/', (req, res)=>{
    res.send("Use /users or /users/:id");
});

//get all users
app.get('/users', (req, res)=>{
    res.json(users);
});

//get single user by the ID (route param)
app.get('/users/:id', (req, res)=>{
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if(!user){
        return res.status(404).send('user not found');
    }

    return res.status(200).json(user);
});

app.listen(3000, ()=>{
    console.log("server running on the port 3000");
});

