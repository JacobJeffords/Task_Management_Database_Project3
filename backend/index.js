require('dotenv').config(); 

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});