import express from "express";
import { messages } from "../routes/home.ts";

export const getReq = (req: express.Request, res: express.Response) => {
  res.render('form', { title: 'Form' });
};

export const postMessage = (req: express.Request, res: express.Response) => {
  messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
  res.redirect('/');
};