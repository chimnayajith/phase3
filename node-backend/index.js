const express = require("express");
const bodyParser = express.json;
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/authRoutes.js");

const port = process.env.PORT || 3000;

// Connecting to mongo database
require("./config/dbConnection.js");
app.use(cors());
app.use(bodyParser());

app.use("/auth", authRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
