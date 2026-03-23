
const Employee = require("../models/Employee")

async function homepage(req, res) {
  try {
    let data = await Employee.find()
    res.render("home", {
      title: "Home Page",
      data: data
    })
  }
  catch (error) {
    console.log(error)
    res.render("home", {
      title: "Home Page",
      data: []
    })

  }
}

async function deletepage(req, res) {
  try {
    await Employee.findByIdAndDelete(req.params.id)
    res.redirect("/")
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
}

async function editpage(req, res) {
  try {
    let data = await Employee.findById(req.params.id)
    res.render("Create", {
      title: "Edit Employee",
      data: data,
      errormsg: {}
    })
  }
  catch (error) {
    console.log(error)
    res.redirect("/")
  }
}

async function updatepage(req, res) {
  try {
    await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { runValidators: true }
    )
    res.redirect("/")
  }
  catch (error) {
    let errormsg = {}

    error.errors?.name && (errormsg.name = error.errors.name.message)
    error.errors?.email && (errormsg.email = error.errors.email.message)
    error.errors?.phone && (errormsg.phone = error.errors.phone.message)
    error.errors?.designation && (errormsg.designation = error.errors.designation.message)
    error.errors?.salary && (errormsg.salary = error.errors.salary.message)

    res.render("Create", {
      title: "Edit Employee",
      data: req.body,
      errormsg: errormsg
    })
  }
}



// async function deletepage(req, res){
//   try {
//     let data = await Employee.findOne({_id: req.params._id})
//     await data.deleteOne()
//     res.redirect("/")

//   }

//   catch (error){
// console.log(error)
// res.redirect("/")
// }
// }

function Createpage(req, res) {
  res.render("Create", {
    title: "Create Page",
    data: {},
    errormsg: {
      name: "",
      email: "",
      phone: "",
      designation: "",
      salary: ""
    }
  })
}

async function Storepage(req, res) {
  try {
    var data = new Employee(req.body)
    await data.save()
    res.redirect("/")
  }
  catch (error) {
    let errormsg = {}
    error.errors.name ? errormsg.name = error.errors.name.message : ""
    error.errors.email ? errormsg.email = error.errors.email.message : ""
    error.errors.phone ? errormsg.phone = error.errors.phone.message : ""
    error.errors.designation ? errormsg.designation = error.errors.designation.message : ""
    error.errors.salary ? errormsg.salary = error.errors.salary.message : ""
    res.render("Create.hbs", {
      title: "Create Record",
      data: data,
      errormsg: errormsg

    })
  }
}

module.exports = {
  homepage: homepage,
  Createpage: Createpage,
  Storepage: Storepage,
  deletepage: deletepage,
  editpage: editpage,
  updatepage: updatepage
}

//    const Employee = require("../models/Employee")

// function homepage(req, res) {
//   res.render("home", {
//     title: "Home Page"
//   })
// }

// function Createpage(req, res) {
//   res.render("Create", {
//     title: "Create Page",
//     data: {},
//     errormsg: {}
//   })
// }

// async function Storepage(req, res) {
//   try {
//     console.log("BODY =>", req.body)   // 🔥 DEBUG LINE

//     const data = await Employee.create(req.body)

//     console.log("SAVED =>", data)      // 🔥 CONFIRM INSERT

//     return res.redirect("/")           // ✅ redirect WORK karega
//   } catch (error) {
//     console.log("ERROR =>", error.message)

//     return res.render("Create", {      // ❗ .hbs nahi
//       title: "Create Page",
//       data: req.body,
//       errormsg: {
//         name:"",
//         email:"",
//         phone:"",
//        designation:"",
//        salary:""
//       }
//     })
//   }
// }

// module.exports = { homepage, Createpage, Storepage }
