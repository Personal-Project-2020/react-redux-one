require('dotenv').config();
const express = require('express');
var color = require('color');
const router = require('./routers/goalRouts');
const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/goals', router);
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`server is up and listening on port no ${PORT}`)
})