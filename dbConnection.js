

require("mongoose").connect("mongodb://127.0.0.1:27017/MyCRUD")

.then(()=>
console.log("database s connected"))
.catch(error=>{
    console.log(error)
})