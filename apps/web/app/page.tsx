import { Button } from "@repo/ui/button";
import Navbar from "@repo/ui/navbar";
import { getServerSession } from "next-auth";
import { GET } from "./api/auth/[...nextauth]/route";
import styles from "./page.module.css";
import { UserSessionType } from "common";

type UserSessionResponseType = {
  user: UserSessionType;
  expires: string;
} | null;
export default async function Page(): Promise<JSX.Element> {
  const session: UserSessionResponseType = await getServerSession(GET);

  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  );
}
