import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.card}>
          <Image src={"/frog.png"} alt={"An image"} width={200} height={200}/>
          Omar Siman
        </div>
        <div className={styles.card}>
          <Image src={"/pumpkin.png"} alt={"An image"} width={200} height={200}/>
          Gabriel Ong
        </div>
      </main>
    </div>
  );
}
