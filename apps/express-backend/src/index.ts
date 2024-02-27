import { UserSession } from "common";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import { startSocket } from "./socket/socketController";
import { connectToMongoDB } from "./database/mongoDbController";
import userRoute from "./routes/user";
import { authenticateJwt } from "./middlewares/authenticateJwt";

const PORT = 3002;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
const httpServer = createServer(app);

connectToMongoDB();

app.use(authenticateJwt);
app.use("/user", userRoute);

startSocket(httpServer);

httpServer.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`);
});
