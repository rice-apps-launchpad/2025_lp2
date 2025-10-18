import styles from "./page.module.css";
import Card from "@/app/using-components/card";

export default function Page() {
  return (
    <div className={styles.page}>
        <Card name={"Omar Siman"} imagePath={"/frog.png"}/>
        <Card name={"Gabriel Ong"} imagePath={"/pumpkin.png"}/>
    </div>
  );
}
