require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/AuthRoute");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// ✅ Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Auth Routes
app.use("/", authRoute);

// ✅ Holdings API
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// ✅ Positions API
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    return res.status(201).json({
      success: true, // ✅ This is what BuyActionWindow expects
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (err) {
    console.error("Error saving order:", err);
    return res.status(500).json({
      success: false,
      error: "Failed to save order",
    });
  }
});

app.get("/getOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// ✅ MongoDB Connection & Server Start
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
