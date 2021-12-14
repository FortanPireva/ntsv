// const express = require("express");

// const app = express();
// const swaggerUi = require("swagger-ui-express");
// const docs = require("./docs/basicInfo");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));

// const PORT = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//   var date = new Date();
//   res.send(date.toLocaleString());
// });

// app.listen(PORT, () => {
//   console.log(`Server started listening on port ${PORT}`);
// });

import express from "express";

const app = express();
const swaggerUi = require("swagger-ui-express");
const docs = require("./docs/basicInfo");
const PORT = process.env.PORT || 3000;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));

app.get("/", (req, res) => {
  var date = new Date();
  res.send(date.toLocaleString());
});

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});