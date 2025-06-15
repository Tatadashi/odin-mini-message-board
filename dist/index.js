import express, {} from "express";
const port = 8080;
const app = express();
app.get('/', (req, res) => {
    res.send("hello world");
});
app.listen(port, () => {
    console.log(`now listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map