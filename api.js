const express = require("express");
const dbConnect = require("./mongodb")
const app = express();

app.use(express.json())


//get method

app.get('/', async(req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
})

//post method

app.post('/', async(req,resp)=>{

    let data = await dbConnect();
    let result = await data.insert(req.body)
    resp.send(result)
    
})



//put method

app.put("/", async(req,resp)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name: req.body.name},
        {$set: req.body}
    )
    resp.send({result: "updated"})
})

app.listen(5000)