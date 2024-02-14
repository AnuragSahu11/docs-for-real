import { Button } from "@repo/ui/button";
import { getServerSession } from "next-auth";
import { GET } from "./api/auth/[...nextauth]/route";
import styles from "./page.module.css";

export default async function Page(): Promise<JSX.Element> {
  const session = await getServerSession(GET);
  console.log(session, "hello");
  return (
    <main className={styles.main}>
      <Button appName="web" className={styles.button}>
        Click me!!!!!!!!
      </Button>
    </main>
  );
}
