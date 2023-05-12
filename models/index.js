
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://vignesh03022001:mongoDBpass@cluster0.sssrio7.mongodb.net/?retryWrites=true&w=majority", {
  keepAlive: true, 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open",()=>{
    console.log("db-connected");
})

module.exports.Task = require("./taskapp") 