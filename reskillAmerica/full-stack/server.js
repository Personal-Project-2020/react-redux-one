require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGOD_URL;
const Model = require('./model/model.js');
const userSchema = require('./model/schema.js');

let student = new Model(userSchema);

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Home Page from 3000');
});
app.get('/student', async (req, res) => {
  let result = await student.readByQuery({});
  res.send(result);
});
app.post('/post', async (req, res) => {
  let result = await student.create(req.body);
  res.send(result);
});
mongoose.connection.once('open', () => {
  console.log('mongo is connected');
});
mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
});
