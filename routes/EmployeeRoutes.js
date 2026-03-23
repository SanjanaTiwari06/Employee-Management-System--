const employeeRouter = require("express").Router()
const {encoder} = require("../Middlewares/indexMW")


 
const { homepage, Createpage, Storepage , deletepage , editpage , updatepage} = require("../controller/EmployeeController")

employeeRouter.get("/",homepage)
employeeRouter.get("/Create",Createpage)
employeeRouter.post("/Store",encoder,Storepage)
employeeRouter.get("/delete/:id", deletepage)
employeeRouter.get("/edit/:id", editpage)
employeeRouter.post("/update/:id", encoder, updatepage)




module.exports = employeeRouter