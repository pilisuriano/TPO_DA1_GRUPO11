const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const connectDB = require('./database/connectdb');
const AuthsRoutes = require('./routes/auths.router');
const UsersRoutes = require('./routes/users.router');

require('dotenv').config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/', (req, res) => {
  res.send("Welcome to Memento API")
})
app.get('/auths', AuthsRoutes)
app.get('/users', UsersRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})