"use client";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    console.log(process.env.NEXT_GOOGLE_CLIENT_ID);
  }, []);

  return (
    <>
      <Button onClick={() => signIn()}>Sign In With Google</Button>
    </>
  );
};

export default LoginPage;
