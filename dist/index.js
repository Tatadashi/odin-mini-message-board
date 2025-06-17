import express from "express";
import { homeRoute } from "./routes/home.js";
import { newRoute } from "./routes/new.js";
const port = 8080;
const app = express();
app.use("/", homeRoute);
app.use("/new", newRoute);
app.listen(port, () => {
    console.log(`now listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map