import express from "express";
import { getReq, postMessage } from "../controllers/new.js";
const route = express.Router();
route.get("/", getReq);
route.post("/", postMessage);
export { route as newRoute };
//# sourceMappingURL=new.js.map