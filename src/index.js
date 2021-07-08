const express = require("express");
const mongoose = require("mongoose");

const { PORT, DB_URL, MONGOOSE_OPTIONS } = require("./config");
const routes = require("./routes");

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
