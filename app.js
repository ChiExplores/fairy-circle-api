const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
// init db connection
require("./data");

const indexRouter = require("./routes/index");
const graphqlRouter = require("./routes/graphql");
const authRouter = require("./routes/auth");


require("dotenv").config();
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// CORS protect all routes
const allowedOrigins = process.env.CLIENT_ADDRESS;
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  method: "GET,POST",
};
app.use("*", cors(corsOptions));
// TODO add handling of /graphql GET requests for graphiql

app.use("/", indexRouter);
app.use("/graphql", graphqlRouter);
app.use("/auth", authRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
