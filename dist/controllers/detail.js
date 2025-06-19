import express from "express";
import { messages } from "../routes/home.js";
export const getReq = (req, res) => {
    let messageID = Number(req.params.messageID);
    res.render("detail", { title: "Message", message: messages[messageID] });
};
//# sourceMappingURL=detail.js.map