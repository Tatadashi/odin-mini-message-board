import express from "express";
import { getReq } from "../controllers/home.js";
const router = express.Router();
router.get("/", getReq);
export { router as homeRoute };
//# sourceMappingURL=home.js.map