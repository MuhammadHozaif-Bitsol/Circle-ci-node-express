const express = require("express");
const app = express();
app.disable("x-powered-by");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "Express server is live!" });
});

app.get("/api/users", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

app.post("/api/echo", (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ error: "Missing data field" });
  }
  res.status(201).json({ received: data });
});

module.exports = app;
