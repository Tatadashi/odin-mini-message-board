import type { Request, Response } from "express";
import { messagesList } from "../models/messages.ts";

export const messagesListGet = (req: Request, res: Response) => {
  res.render("index", { title: "Mini Messageboard", messages: messagesList });
};

export const messagesCreateGet = (req: Request, res: Response) => {
  res.render("createMessage", { title: "Add New Message" });
};

export const messagesCreatePost = (req: Request, res: Response) => {
  messagesList.push({
    content: req.body.content,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
};

export const messageGet = (req: Request, res: Response) => {
  let messageID: number = Number(req.params.id);
  res.render("message", {
    title: "Message Details",
    message: messagesList[messageID],
  });
};
