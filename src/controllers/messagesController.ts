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
    messagesList.unshift({
      content: req.body.content,
      user: req.body.user,
      added: new Date(),
    });
  },
];

export const messagesSearchGet = (req: Request, res: Response) => {
  let hasUser: boolean = true;
  let userMessages: { content: string; added: Date }[] = [];

  messagesList.forEach((message) => {
    if (req.query.user == message.user) {
      let messageCopy: { content: string; user?: string; added: Date } = {
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

export const messageGet = (req: Request, res: Response) => {
  let messageID: number = Number(req.params.id);
  res.render("message", {
    title: "Message Details",
    message: messagesList[messageID],
  });
};
