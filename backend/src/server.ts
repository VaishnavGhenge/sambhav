import express from "express";
import http from "http";

import settings from "./config/settings";
import "./config/database.config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from sambhav backend!");
});

http.createServer(app).listen(settings.root.PORT, () => {
  console.log(`Server is running on port ${settings.root.PORT}`);
});
