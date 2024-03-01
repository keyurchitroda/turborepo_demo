import styles from "./page.module.css";
// import { Button } from "@repo/ui/button";
import Button from "@repo/ui/mui_button";

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <Button>Click me! in Docs</Button>
    </main>
  );
}
