import express from "express";
import { getReq } from "../controllers/home.ts";

const router = express.Router();
router.get("/", getReq);

export { router as homeRoute };
