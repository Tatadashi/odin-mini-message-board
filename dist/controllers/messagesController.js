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
        messagesList.unshift({
            content: req.body.content,
            user: req.body.user,
            added: new Date(),
        });
    },
];
export const messagesSearchGet = (req, res) => {
    let hasUser = true;
    let userMessages = [];
    messagesList.forEach((message) => {
        if (req.query.user == message.user) {
            let messageCopy = {
                ...message,
            };
            delete messageCopy.user;
            userMessages.push(messageCopy);
        }
    });
    if (userMessages.length == 0) {
        hasUser = false;
        let fakeYear = new Date(0);
        fakeYear.setFullYear(0);
        userMessages.push({
            content: "This user has no messages",
            added: fakeYear,
        });
    }
    res.render("searchUser", {
        title: "User Messages",
        user: req.query.user,
        messages: userMessages,
    });
};
export const messageGet = (req, res) => {
    let messageID = Number(req.params.id);
    res.render("message", {
        title: "Message Details",
        message: messagesList[messageID],
    });
};
//# sourceMappingURL=messagesController.js.map