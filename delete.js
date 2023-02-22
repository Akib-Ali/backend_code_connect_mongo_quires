const dbConnect = require("./mongodb")


const deletemethod = async ()=>{

    const db = dbConnect()
    const result = db.delete({name:"sharik rahman"})



}

deletemethod()
