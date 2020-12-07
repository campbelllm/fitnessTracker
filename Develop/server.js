require('dotenv')
  .config();
const express = require('express');
const mongoose = require('mongoose');
// const routes = require('./routes');
const path = require('path');
// require('./services/passport');
const app = express();
const logger = require("morgan");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Yee'))
  .catch(e => console.log(e));

mongoose.set('debug', true);


const PORT =  3000;

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log('Server started listening on PORT http://localhost:3000');
});