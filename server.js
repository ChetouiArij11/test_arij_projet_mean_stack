
const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors')
const PostRouter = require('./backend/routes/post.route');
const app = express();
app.use('/post', PostRouter);
app.use(express.json());
app.use(cors());
// connection vers mongoDB Atlas (service cloud)
mongoose
  .connect(
    "mongodb+srv://arij:0000@cluster0.irw5f0t.mongodb.net/Posts?retryWrites=true"
  )
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });


  app.use("/postApi", PostRouter);
  app.use(express.static(path.join(__dirname, "backend/www")));
  app.listen(3000, () => {
    console.log("server is running on port 3000...");
  });
