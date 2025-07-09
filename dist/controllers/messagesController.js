import { messagesList } from "../models/messages.js";
export const messagesListGet = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messagesList });
};
export const messagesCreateGet = (req, res) => {
    res.render("createMessage", { title: "Add New Message" });
};
export const messagesCreatePost = (req, res) => {
    messagesList.push({
        content: req.body.content,
        user: req.body.user,
        added: new Date(),
    });
    res.redirect("/");
};
export const messageGet = (req, res) => {
    let messageID = Number(req.params.id);
    res.render("message", {
        title: "Message Details",
        message: messagesList[messageID],
    });
};
//# sourceMappingURL=messagesController.js.map