import express from "express";
import { getReq } from "../controllers/new.js";
const route = express.Router();
route.get("/", getReq);
export { route as newRoute };
//# sourceMappingURL=new.js.map