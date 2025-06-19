import express from "express";
import { messages } from "../routes/home.js";
export const getReq = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
};
//# sourceMappingURL=home.js.map