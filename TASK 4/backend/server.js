const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/', authRoutes);

app.listen(5000, () => console.log(`Server running at http://localhost:5000`));
