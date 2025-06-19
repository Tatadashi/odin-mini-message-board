import express from "express";
import { messages } from "../routes/home.ts";

export const getReq = (req: express.Request, res: express.Response) => {
  let messageID: number = Number(req.params.messageID);
  res.render("detail", { title: "Message", message: messages[messageID] });
};
