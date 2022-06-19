require('dotenv').config()

const express = require('express');
const routes = require('./routes/matches');
const mongoose = require('mongoose');

// express app
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method, res.statusCode);
  next();
});

// routes
app.use('/api/playPool', routes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB and listening on port 4000!')
    });
  })
  .catch((error) => {
    console.log(error);
  });

