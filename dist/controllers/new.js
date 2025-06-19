import express from "express";
import { messages } from "../routes/home.js";
export const getReq = (req, res) => {
    res.render('form', { title: 'Form' });
};
export const postMessage = (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/');
};
//# sourceMappingURL=new.js.map