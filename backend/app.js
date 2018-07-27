const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const postsRoutes = require('./routes/posts');

const app = express();

mongoose.connect("mongodb+srv://gui:CpYXwiuSFgfJ7uK8@cluster0-oy5gg.mongodb.net/node-angular?retryWrites=true", {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next ) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS")
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
