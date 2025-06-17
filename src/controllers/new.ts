import express from "express";

export const getReq = (req: express.Request, res: express.Response) => {
  res.send("new message form");
};
