require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routes/UserRoutes"));
app.use("/api/customer", require("./routes/CustomerRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});