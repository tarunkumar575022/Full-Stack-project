const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose  = require("mongoose");
dotenv.config();
app.get('/favicon.ico', (req, res) => res.status(204).end());
const userRouter = require('./routes/userRoute')

app.use(express.json())

const cors = require("cors")
app.use(cors())

//model imported here
const userData = require("./models/userModel");



//Connect to mongodb database(locally)
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })
.catch((error) => console.log("Failed to connect", error));

app.use(userRouter)
