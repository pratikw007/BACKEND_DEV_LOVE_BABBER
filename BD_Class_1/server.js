//create Server//server instantiate
const express = require('express');
const app = express();


//use to parese req.body in express -> POST & PUT Request
const bodyparser = require('body-parser');
//specificaly parse JSON data & add it to the request. Body Object
app.use(bodyparser.json());



// Instatinaus == activation the server on 3000 port
app.listen( 3000, () =>{
      console.log("Server Started at PORT 3000");
}) 


// creating a Route

//how to make a get request
app.get('/',(request,response) =>{
    response.send("Helllo Bro, All Good");
})

//how to make post request
app.post('/api/cars',(request,response) => {
            const {name,brand} = request.body;
            console.log(`${name} and ${brand}`);
            response.send("Car Submitted Sucessfully.");
}) 

const mongoose = require('mongoose');
mongoose.connect('mongoose://localhost:27014/myDatabse',{
    useNewurlParser:true,
    useUnifiedTopology:true
})

.then( () => {console.log("Connection Sucessful");})
.catch( (error) => {console.log("Recieced an error")})