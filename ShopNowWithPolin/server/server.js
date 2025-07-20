const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const privateRoutes = require("./routes/privateRoutes");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

// config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/private", privateRoutes);
app.use("/api/products", productRoutes);

connectDB()

// routes (to be added later)
app.get("/", (req, res) => {
  res.send("Welcome to ShopNowWithPolin API!");
});

// connect to DB and start server
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(` Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("DB connection error:", err));
