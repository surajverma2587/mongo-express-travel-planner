const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const DB_NAME = "travelDb";

const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

mongoose.connect(DB_URL, dbOptions);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
