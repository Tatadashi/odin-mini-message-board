import { messagesList, messageValidator } from "../models/messages.js";
import { validationResult } from "express-validator";
export const messagesListGet = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messagesList });
};
export const messagesCreateGet = (req, res) => {
    res.render("createMessage", { title: "Add New Message" });
};
//need to spread after this is imported
export const messagesCreatePost = [
    messageValidator,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("createMessage", {
                title: "Add New Message",
                errors: errors.array(),
            });
        }
        res.redirect("/");
        messagesList.push({
            content: req.body.content,
            user: req.body.user,
            added: new Date(),
        });
    },
];
export const messageGet = (req, res) => {
    let messageID = Number(req.params.id);
    res.render("message", {
        title: "Message Details",
        message: messagesList[messageID],
    });
};
//# sourceMappingURL=messagesController.js.map