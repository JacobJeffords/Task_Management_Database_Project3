require('dotenv').config();
const express = require('express');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/tasksRoutes');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

//Session management with PostgreSQL
app.use(session({
    store: new pgSession({
        pool,
        tableName:'session'
    }),
    secret: process.env.SESSION_SECRET || 'your_session_secret',
    resave: false,
    saveUninitialized: false
}));

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});