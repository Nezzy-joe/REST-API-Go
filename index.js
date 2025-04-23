const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let users = [
    {id: 1, name: "Nezzy-joe" },
    {id: 2, name: "Mona" },
    {id: 3, name: "Hozana" },
    {id: 4, name: "Esther" },
];

//Products
let products = [
    {id: 1, name: "Table", price: 99},
    {id: 2, name: "Fan", price:50},
    {id:3, name: "Book", price:400},
    {id:4, name: "Gen", price: 150},

]
//CREATE -POST
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
        };
    users.push(newUser);
    res.status(201).json(newUser);
});
//READ - GET all
app.get('/users', (req, res) => {
    res.json(users)
});

app.get('/products', (req, res) => {
    res.json(products);
});
//READ - GET one
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id ==req.params.id);
if (!user) return res.status(404).json({message: "user not found"});
res.json(user);
});

//UPDATE - PUT
app.put('/users/:id', (req, res)=>{
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = req.body.name;
    res.json(user);
});

//DELETE
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !=req.params.id);
    res.json({ message: "User deleted" });
});
//GET - ROOT
app.get("/", (req, res) => {
    res.send("🚀 Welcome to Nezzy~Joe's REST API!");
  });

//START SERVER
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})