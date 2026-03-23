const Router = require("express").Router()

const employeeRouter = require("./EmployeeRoutes")
Router.use("/", employeeRouter)

module.exports = Router