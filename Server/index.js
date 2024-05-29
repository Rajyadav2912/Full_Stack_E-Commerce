const express = require("express");
const app = express();

const cors = require("cors");

require("dotenv").config();

app.use(cors());

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
