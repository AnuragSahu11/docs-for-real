import { Button } from "@repo/ui/button";
import Navbar from "@repo/ui/navbar";
import { getServerSession } from "next-auth";
import { GET } from "./api/auth/[...nextauth]/route";
import styles from "./page.module.css";

export default async function Page(): Promise<JSX.Element> {
  const session = await getServerSession(GET);

  return (
    <main className={styles.main}>
      <Navbar />
      {session ? (
        <>Logout</>
      ) : (
        <Button appName="web" className={styles.button}>
          Click me!!!!!!!!
        </Button>
      )}
    </main>
  );
}
