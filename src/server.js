const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};
mongoose.connect(process.env.MONGODB_URL, options)
.then(() => console.log('Database connection established'))
.catch(err => console.log('An error occured while connecting to database'))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});