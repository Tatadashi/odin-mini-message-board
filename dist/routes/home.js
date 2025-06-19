import express from "express";
import { getReq } from "../controllers/home.js";
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];
const router = express.Router();
router.get("/", getReq);
export { router as homeRoute, messages };
//# sourceMappingURL=home.js.map