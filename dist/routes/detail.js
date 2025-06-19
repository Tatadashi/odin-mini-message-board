import express from "express";
import { getReq } from "../controllers/detail.js";
const router = express.Router();
router.get("/:messageID", getReq);
export { router as detailRoute };
//# sourceMappingURL=detail.js.map