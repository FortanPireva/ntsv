
import express from "express";
import Note from "./models/Note";
import routes from "./routing"

const app = express();
const swaggerUi = require("swagger-ui-express");
const docs = require("./docs/basicInfo");
const PORT = process.env.PORT || 3000;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));


app.use("/api",routes.public);

app.get("/", (req, res) => {
  var note = new Note("note1",(Math.random()*1000).toString(),new Date(Date.now()));

  res.send(note.toString());
});

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});