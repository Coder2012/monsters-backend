const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./routes");

const PORT = 3001;
const api = express();
dotenv.config();

api.use(express.json());
api.use(cors());
api.use(route);

api.listen(PORT, () => {
  console.log(`API server is running on Port: ${PORT}`);
});
