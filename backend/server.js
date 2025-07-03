// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const paymentRoutes = require("./routes/payment");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // no need for `{ extended: false }`

// ✅ Use router function here
app.use("/payment", paymentRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
