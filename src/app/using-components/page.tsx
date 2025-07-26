import styles from "./page.module.css";
import Card from "@/app/using-components/card";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Card name={"Omar Siman"} imagePath={"/frog.png"}/>
        <Card name={"Gabriel Ong"} imagePath={"/pumpkin.png"}/>
      </main>
    </div>
  );
}
