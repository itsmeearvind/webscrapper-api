const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const scrapeRoute = require('./routes/scrape');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGO_URI;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api', scrapeRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
