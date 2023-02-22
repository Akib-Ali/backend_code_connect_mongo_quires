const dbConnect = require("./mongodb")


const updateData = async()=>{

    let data =await  dbConnect();
    let result =await data.updateOne(
        {name:"Shariq Rahmani", age:30}, {$set:{name:"Shariq Rahman", age:26}}
        )

        console.log(result)
    


}

updateData()