import { Router } from "express";
import { messagesListGet, messageGet, messagesCreateGet, messagesCreatePost, messagesSearchGet, } from "../controllers/messagesController.js";
const messagesRouter = Router();
//ignore automatic favicon get req
messagesRouter.get("/favicon.ico", function (req, res) {
    res.status(204);
    res.end();
});
messagesRouter.get("/", messagesListGet);
messagesRouter.get("/create", messagesCreateGet);
//have to manually spread for [validation, (req, res)] or it overloads
messagesRouter.post("/create", ...messagesCreatePost);
messagesRouter.get("/search", messagesSearchGet);
messagesRouter.get("/:id", messageGet);
export { messagesRouter };
//# sourceMappingURL=messagesRouter.js.map