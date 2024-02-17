"use client";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    console.log(process.env.NEXT_GOOGLE_CLIENT_ID);
  }, []);

  const session = useSession();

  return (
    <>
      <Button onClick={() => signIn()}>Sign In With Google</Button>
      <Button onClick={() => signOut()}>Log out</Button>
    </>
  );
};

export default LoginPage;
