import express from "express";
import { createServer } from "http";
import cors from "cors";
import { UserSession } from "common";
import { UserSessionType } from "common";
import { Server } from "socket.io";

const port = 3002;
const app = express();

app.use(cors());

app.post("/", (req: any, res: any) => {
  let parsedUser = UserSession.safeParse(req.body);
  if (!parsedUser.success) {
    res.send("Incorrect input 2");
  }
});

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "*" },
});

let pageText = "";

io.on("connection", (socket) => {
  console.log("connected", socket.id);
  socket.on("page-load", (pageName: string) =>
    socket.emit("initial-page-data", pageText)
  );
  socket.on("page-data-change", (inputData) => {
    pageText = inputData;
    console.log(pageText, inputData);
  });
});

httpServer.listen(port, () => {
  console.log("Running on port");
});
