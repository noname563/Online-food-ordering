const express = require("express");
const app = express();
const mongodb = require("./db");

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:5173")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin , X-Requested-With ,Content-Type ,Accept"
  )
  next();
})
app.use(express.json());
app.use("/api", require("./routes/CreateUser.js"));
app.use("/api", require("./routes/DisplayData.js"));

mongodb()
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(5000);
