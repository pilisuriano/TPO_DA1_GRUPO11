import express from "express"
import dotenv from "dotenv";
import connectDB from './database/connectdb.js';
import AuthsRoutes from './routes/auths.router.js';
import UsersRoutes from './routes/users.router.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/', (req, res) => {
  res.send("Welcome to Memento API")
})
app.use('/auths', AuthsRoutes)
app.use('/users', UsersRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})