import type { Request, Response } from "express";
import { messagesList, messageValidator } from "../models/messages.ts";
import { validationResult } from "express-validator";

export const messagesListGet = (req: Request, res: Response) => {
  res.render("index", { title: "Mini Messageboard", messages: messagesList });
};

export const messagesCreateGet = (req: Request, res: Response) => {
  res.render("createMessage", { title: "Add New Message" });
};

//need to spread after this is imported
export const messagesCreatePost = [
  messageValidator,
  (req: Request, res: Response) => {
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

export const messageGet = (req: Request, res: Response) => {
  let messageID: number = Number(req.params.id);
  res.render("message", {
    title: "Message Details",
    message: messagesList[messageID],
  });
};
