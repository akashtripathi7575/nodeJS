const express = require('express');
const app = express();

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 },
  { id: 4, name: "Laptop Pro", price: 90000 }
];

//Home
app.get('/', (req, res)=>{
    res.send('use /products?name=&maxPrice=');
});

app.get('/products', (req, res)=>{
    let result = products;

    const {name, maxPrice} = req.query;

    //filter by name
    if(name){
        result = result.filter(p=>{
            p.name.toLowerCase().includes(name.toLowerCase())
        });
    }

    //filter by max price
    if(maxPrice){
        const price = Number(maxPrice);
        result = result.filter(p => p.price <= price);
    }

    res.json(result);
});

app.listen(3000, ()=>{
    console.log("server is running on the port 3000");
});