import express from "express";

const app = express();
app.get("/", (_req, res) => {
  res.send("Hello world!");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
