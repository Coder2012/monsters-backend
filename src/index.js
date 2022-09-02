const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./routes");

const PORT = process.env.PORT || 3001;
const api = express();
dotenv.config();

const options = {
  origin: [
    "http://localhost:3000",
    "https://deluxe-axolotl-2e46f9.netlify.app",
  ],
};

api.use(express.json());
api.use(cors(options));
api.use(route);

api.listen(PORT, () => {
  console.log(`API server is running on Port: ${PORT}`);
});
