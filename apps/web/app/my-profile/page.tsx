"use client";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3002");
const pageName = "sexy-lady";
const LoginPage = () => {
  const session = useSession();

  useEffect(() => {
    (async () => {
      const user = await axios.get("http://localhost:3002/user/profile", {
        headers: {
          useremail: "a@gmail.com",
        },
      });
      console.log("user", user);
    })();
  }, []);

  return (
    <>
      <DemoPageComponent />
      <Button onClick={() => signIn()}>Sign In With Google</Button>
      <Button onClick={() => signOut()}>Log out</Button>
    </>
  );
};

const DemoPageComponent = () => {
  const inputRef = useRef("");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("CCCCCC");
    });
    socket.emit("page-load", pageName);
    socket.on("initial-page-data", (textFieldData) => {
      console.log(textFieldData);
    });
  }, []);
  return (
    <>
      <TextField
        onChange={(e) => {
          console.log(e.target.value);
          inputRef.current = e.target.value;
        }}
      />
      <Button onClick={() => socket.emit("page-data-change", inputRef.current)}>
        Submit
      </Button>
    </>
  );
};

export default LoginPage;
