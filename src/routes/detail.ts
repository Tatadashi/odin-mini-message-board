import express from "express";
import { getReq } from "../controllers/detail.ts";

const router = express.Router();

router.get("/:messageID", getReq);

export { router as detailRoute };
