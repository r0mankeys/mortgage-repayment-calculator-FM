import express from "express";
import { readFile } from "fs";

const app = express();
const port = 8080;

app.use(express.static("."));

app.listen(port, () => {
  console.log("We're live");
});
