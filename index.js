
const express = require("express") 
const app = express() 
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 8000 
app.use(bodyParser.json()) 
const db = require("./models")
const webpush = require("web-push")
const path = require("path")

const cors = require("cors")
app.use(cors())

const publicVapidKey = "BGmVWZ7E3Th1AXn-U3WBhaKwyDMdVg_O5sMl6A-B-Twbt8Nqk4fciQbZvvwcNhP8MBWAGemJdLaA5YNK_r3x0QQ"
const privateVapidKey = "r48ndOQcqjL1ulLvcvnNtjD1RGMDK48_-2_80MX4Pj8"

webpush.setVapidDetails("mailto: <shrivigneshprasanna@gmail.com>",publicVapidKey,privateVapidKey)

function success(res, payload) {
    return res.status(200).json(payload)
  }
app.use(express.static(path.join(__dirname, "./Task-Front-End/build")));
app.get("/", function (_, res) {
    res.sendFile(
      path.join(__dirname, "./client/dist/index.html"),
      function (err) {
        res.status(500).send(err);
      }
    );
  });
  app.post("/to", async (req,res) =>{
    const subscription = req.body;
    res.status(201).json({})
    const payload = JSON.stringify({"title":"Hello World"})
    webpush.sendNotification(subscription,payload).catch(console.log)
  })
  app.get("/tasks", async (req, res, next) => {
    try {
      const tasks = await db.Task.find({})
      return success(res, tasks)
    } catch (err) {
      next({ status: 400, message: "failed to get tasks" })
    }
  })
  
  app.post("/tasks", async (req, res, next) => {
    try {  
      const todo = await db.Task.create(req.body)
      return success(res, todo)
    } catch (err) {
      next({ status: 400, message: "failed to create todo" })
    }
  })
  
  app.put("/tasks/:id", async (req, res, next) => {
    try {
      const todo = await db.Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return success(res, todo)
    } catch (err) {
      next({ status: 400, message: "failed to update todo" })
    }
  })
  app.delete("/tasks/:id", async (req, res, next) => {
    try {
      await db.Task.findByIdAndRemove(req.params.id)
      return success(res, "todo deleted!")
    } catch (err) {
      next({ status: 400, message: "failed to delete todo" })
    }
  })
  
  app.use((err, req, res, next) => {
    return res.status(err.status || 400).json({
      status: err.status || 400,
      message: err.message || "there was an error processing request",
    })
  })

app.listen(PORT, () => {
  // listening on port 8000
  console.log(`listening on port ${PORT}`) 
})
