const express = require("express");

const app = express();

app.get("/quote", function (req, res, next) {
  res.json({
    quote: "Every action has a consequence",
  });
});

app.listen(3000);
