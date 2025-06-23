import express from "express";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { homeRoute } from "./routes/home.ts";
import { newRoute } from "./routes/new.ts";
import { detailRoute } from "./routes/detail.ts";

const port = 8080;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoute);
app.use("/new", newRoute);
app.use("/detail", detailRoute);

app.listen(port, () => {
  console.log(`now listening on ${port}`);
});
