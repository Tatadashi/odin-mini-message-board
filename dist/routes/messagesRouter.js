import { Router } from "express";
import { messagesListGet, messageGet, messagesCreateGet, messagesCreatePost, } from "../controllers/messagesController.js";
const messagesRouter = Router();
messagesRouter.get("/", messagesListGet);
messagesRouter.get("/create", messagesCreateGet);
messagesRouter.post("/create", messagesCreatePost);
messagesRouter.get("/:id", messageGet);
export { messagesRouter };
//# sourceMappingURL=messagesRouter.js.map