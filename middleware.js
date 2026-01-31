const express = require('express');
const app = express();

app.use(express.json());

//global logger middleware
app.use((req, res, next)=>{
    console.log(`[LOG] ${req.method} ${req.url}`);
    next();
})


//custom middleware
function authorize(req, res, next){

    const user = req.query.user;

    if(user === 'admin'){
        req.user = user;
        next();
    } else {
        res.status(403).send("Not authorized");
    }
}

//time middleware
function addTime(req, res, next){
    req.requestTime = new Date().toLocaleTimeString();
    next();
}

//routes
app.get('/', (req, res)=>{
    res.send("home route working");
});


app.get('/public', (req, res)=>{
    res.send("public route - anyone can access");
});

//protected route using multiple middleware
app.get('/dashboard', authorize, addTime, (req, res)=>{
    res.send(`welcome ${req.user} \n Time: ${req.requestTime}`)
});

app.get('/profile', addTime, (req, res)=>{
    res.send(`Profile page Time: ${req.requestTime}`);
});


app.listen(3000, ()=>{
    console.log("server is running on the port 3000...");
})