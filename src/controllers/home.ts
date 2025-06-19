import express from "express";
import { messages } from "../routes/home.ts";

export const getReq = (req: express.Request, res: express.Response) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages});
};
