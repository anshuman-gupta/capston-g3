const express = require("express");
const { default: mongoose } = require("mongoose");
const {bulkUpdate} = require("./controller/bulkUpdate");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const URL =
  "mongodb+srv://abhi_capstone:g3capstone@cluster0.jwbklkz.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URL)
  .then((res) => {
    console.log("Success");
  })
  .catch((err) => {
    console.log("Error ", err);
  });

app.post("/bulkupdate", bulkUpdate);

app.listen(3001, "localhost", (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Server is live");
  }
});
