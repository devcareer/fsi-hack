require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
