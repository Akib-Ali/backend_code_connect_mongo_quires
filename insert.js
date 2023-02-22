const dbConnect = require("./mongodb")



const insert = async()=>{

    const db = await dbConnect();
    const result = db.insertOne({
        name:"Shahil", age:25, city:"Aligarh"
    })
    console.log(db)



}
insert()