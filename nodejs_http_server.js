const express = require("express");

const app = express();
app.use(express.json());

//initializing server

app.listen(3000, ()=>{
  console.log("Server Running at http://localhost:3000/");
});

//hello User API
app.get('/',(request,response)=>{
    response.send("Hello User");
});

//json object api
app.post('/login/', async (request, response) => {
    const {username, password} = request.body;
    if (username === "prathiv" ){
      if(password === "prathiv@123"){
        response.send("Loged In Sucessfully")
      }else{response.send("Invalid Password")}
    }else{
      response.send("Invalid Username")
    }
})
