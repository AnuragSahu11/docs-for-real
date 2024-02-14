"use client";
import { SessionProvider } from "next-auth/react";

const OAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default OAuthProvider;
