require('dotenv').config({ quiet: true });

const projectRoutes = require('./routes/projectRoutes');
const UserRoutes =  require('./routes/usersRoutes');
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connectDB");

dotenv.config();
// MONGO_URI=mongodb+srv://sahil512sk_coc:Rdx_tbijm_049@cluster0.9xdwln3.mongodb.net/
// PORT=3000
const app = express();
app.use(express.json());
app.use(express.static("portfolio"));
const multer = require("multer");
const path = require("path");
app.use('/projects',projectRoutes);
app.use('/users',UserRoutes);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "portfolio/assets/pdf"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

async function startServer() {
  const db = await connectDB();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
}

startServer();
