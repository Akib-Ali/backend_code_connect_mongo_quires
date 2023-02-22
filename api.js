const express = require("express");
const dbConnect = require("./mongodb")
const mongodb = require('mongodb')
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


//delete method

app.delete("/:id", async(req,resp)=>{

  const data = await dbConnect();
  const result = data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
  resp.send(result)



})

app.listen(5000)