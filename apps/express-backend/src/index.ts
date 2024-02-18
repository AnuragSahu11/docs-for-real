import express from "express";
const app = express();
const port = 3002;

import { UserSession } from "common";

app.get("/", (req: any, res: any) => {});
app.post("/", (req: any, res: any) => {
  let parsedUser = UserSession.safeParse(req.body);
  if (!parsedUser.success) {
    res.send("Incorrect input 2");
  }
});

app.listen(port, () => {
  console.log("Running on port");
});
