const mongoose = require("mongoose")
const express = require("express")
const app = express()
const Router = require("./routes/Router")
const hbs = require("hbs")
const { encoder } = require("./Middlewares/indexMW")
require("./dbConnection")

app.use(encoder)


app.set("view engine", "hbs")
app.set("views", "./views")

hbs.registerPartials("./views/partials")

app.use("/", Router)

app.listen(8000, () =>
  console.log("Application is running on http://localhost:8000/")
)
