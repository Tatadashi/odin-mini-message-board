import express from "express";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { messagesRouter } from "./routes/messagesRouter.js";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", messagesRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`now listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map