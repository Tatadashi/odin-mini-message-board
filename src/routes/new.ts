import express from "express";
import { getReq } from "../controllers/new.ts";

const route = express.Router();

route.get("/", getReq);

export { route as newRoute };
