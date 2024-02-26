import express from "express";
import { createServer } from "http";
import cors from "cors";
import { UserSession } from "common";
import { UserSessionType } from "common";
import { Server } from "socket.io";

export const startSocket = (httpServer: any) => {
  const io = new Server(httpServer, {
    cors: { origin: "http://localhost:3000" },
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
  return io;
};
