import express, { ErrorRequestHandler, NextFunction } from "express";
import Note from "./models/Note";
import routes from "./routing";
import swaggerUI from "swagger-ui-express";
import { Request, Response, Errback } from "express";
import errorhandler from "errorhandler";

const app = express();
import docs from "./docs";
import ResponseError from "./interfaces/ResponseError";
const PORT = process.env.PORT || 3000;

const isProduction = process.env.NODE_ENV === "production";

// if (!isProduction) {
//   app.use(errorhandler());
// }
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.use("/api", routes.public);

app.get("/", (req, res) => {
  // var note = new Note(
  //   "note1",
  //   (Math.random() * 1000).toString(),
  //   new Date(Date.now())
  // );

  // res.send(note.toString());
  res.send("Hi stranger");
});
/// catch 404 and forward to error handler
app.use(function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  var err = new Error("Not Found") as ResponseError;
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function (
    err: ResponseError,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // if (!isProduction) console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
