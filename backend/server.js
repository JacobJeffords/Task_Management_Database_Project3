require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const sequelize = require('./config/sequelize'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await sequelize.sync();
  console.log('Database connection established.'); 
});